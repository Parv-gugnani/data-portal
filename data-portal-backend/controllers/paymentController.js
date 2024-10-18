const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const User = require("../models/user");

exports.buyCredits = async (req, res) => {
  const { userId, credits } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Credits Purchase" },
            unit_amount: credits * 100, // 1 credit = $1
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success", // Adjust URLs based on frontend routes
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
