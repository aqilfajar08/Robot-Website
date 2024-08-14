/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      aspectRatio: {
        'potrait-phone': '9/16 ',
      },      
      zIndex: {
        '-1': '-1',
        '-50': '-50',
      },
      fontFamily: {
        
        poppins: ["poppins"],
      },
      brightness: {
        30: '.30',
        70: '.70',
      },
      width: {
        '400px': '400px', 
        '500px': '500px', 
        '450px': '450px', 
        '350px': '350px', 
        '320px': '320px', 
        '380px': '380px', 
      },
      height: {
        '480px': '480px',
        '500px': '500px',
        '550px': '550px',
        '600px': '600px',
        '620px': '620px',
        '635px': '635px',
        '650px': '650px',
        '680px': '680px',
        '690px': '690px',
        '700px': '700px',
        '50vh': '50vh',
        '110vh': '110vh',
        '137vh': '137vh',
      },
      top: {
        '-400px': '-400px',
        '80px': '80px',
      },
      right: { 
        '395px': '395px', 
        '430px': '430px',
        '480px': '480px',
        '515px': '515px',
        '350px': '350px',
      },
      left: {
        '200px': '200px',
        '320px': '320px',
        '515px': '515px',
        '690px': '690px',
      },
      animation: {
        'fadeIn': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
      },
    },
  },
  plugins: [],
}

