export async function loginUser({ email, password }) {
  
  if (email === "admin@demo.com" && password === "1234") {
    return { success: true, message: "Login exitoso" };
  } else {
    return { success: false, message: "Credenciales incorrectas" };
  }
}
