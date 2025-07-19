const API_URL = "http://localhost:5000/api/auth"; // ✅ change to your backend URL

export const signupUser = async (formData) => {
  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Signup Error:", err);
    return { error: "Something went wrong!" };
  }
};
