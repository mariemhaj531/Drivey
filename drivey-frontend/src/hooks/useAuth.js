// import { useState, useEffect } from 'react';
// import { loginUser, registerUser, getAuthenticatedUser, logoutUser } from '../api/authApi';

// const useAuth = () => {
//   const [user, setUser] = useState(null); // Utilisateur connecté
//   const [loading, setLoading] = useState(true); // Chargement en cours (ex: récupération de l'utilisateur)
//   const [error, setError] = useState(null); // Gestion des erreurs (ex: erreur d'authentification)

//   // Récupérer l'utilisateur authentifié au chargement du composant
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userData = await getAuthenticatedUser();
//         setUser(userData); // Si l'utilisateur est authentifié, on le met dans l'état
//       } catch (err) {
//         setError('Échec de la récupération de l\'utilisateur');
//       } finally {
//         setLoading(false); // Fin du chargement
//       }
//     };

//     fetchUser();
//   }, []);

//   // Fonction pour se connecter
//   const login = async (formData) => {
//     try {
//       const userData = await loginUser(formData);
//       setUser(userData); // Stocker les infos de l'utilisateur après le login
//     } catch (err) {
//       setError('Échec de la connexion');
//     }
//   };

//   // Fonction pour s'inscrire
//   const register = async (formData) => {
//     try {
//       const userData = await registerUser(formData);
//       setUser(userData); // Stocker les infos de l'utilisateur après l'inscription
//     } catch (err) {
//       setError('Échec de l\'inscription');
//     }
//   };

//   // Fonction pour se déconnecter
//   const logout = async () => {
//     try {
//       await logoutUser();
//       setUser(null); // Réinitialiser l'utilisateur au logout
//     } catch (err) {
//       setError('Échec de la déconnexion');
//     }
//   };

//   return {
//     user,        // Utilisateur authentifié
//     loading,     // État de chargement
//     error,       // Erreur d'authentification
//     login,       // Fonction de connexion
//     register,    // Fonction d'inscription
//     logout,      // Fonction de déconnexion
//   };
// };

// export default useAuth;
