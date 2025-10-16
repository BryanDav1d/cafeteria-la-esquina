// Cliente: autenticación con Firebase (Google) y registro básico
// Debes agregar tu propia configuración de Firebase en firebaseConfig

const customerAuth = (function(){
  // placeholder config (REPLACE with your Firebase project config)
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
  };

  function init(){
    if(!window.firebase){ console.warn('Firebase SDK no cargado'); return; }
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    const signupForm = document.getElementById('signupForm');
    signupForm && signupForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const email = signupForm.email.value.trim();
      const pass = signupForm.password.value.trim();
      const name = signupForm.name.value.trim();
      try{
        const userCred = await auth.createUserWithEmailAndPassword(email, pass);
        await userCred.user.updateProfile({displayName: name});
        alert('Cuenta creada.');
      }catch(err){ alert('Error: '+err.message); }
    });

    // Google sign-in button
    const googleBtn = document.getElementById('googleSignIn');
    if(googleBtn){
      const provider = new firebase.auth.GoogleAuthProvider();
      googleBtn.innerHTML = '<button class="btn">Ingresar con Google</button>';
      googleBtn.querySelector('button').addEventListener('click', async ()=>{
        try{ await auth.signInWithPopup(provider); alert('Sesión iniciada con Google'); }
        catch(err){ alert('Error: '+err.message); }
      });
    }
  }

  return { init };
})();

window.addEventListener('DOMContentLoaded', ()=> customerAuth.init());
