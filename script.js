function getPilihanComputer() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'batu';
    if( comp >= 0.34 && comp <= 0.67 ) return 'kertas';
    return 'gunting';
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI';
    if( player == 'batu' ) return ( comp == 'kertas' ) ? 'KALAH' : 'MENANG';
    if( player == 'kertas' ) return ( comp == 'gunting' ) ? 'KALAH' : 'MENANG';
    if( player == 'gunting' ) return ( comp == 'batu' ) ? 'KALAH' : 'MENANG';
}



// const  pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });


function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['batu', 'kertas', 'gunting'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length) i = 0;
        const info = document.querySelector('.info').innerHTML = 'LOADING...';

    }, 100) 
}

let skorP = 0;
let skorC = 0;
const skorPlayer = document.querySelector('.skor-player');
const skorComputer = document.querySelector('.skor-computer');
function getScore(hasil) {
    if( hasil == 'MENANG' ) {
        skorP++;
        skorPlayer.innerHTML = skorP;
    } else if ( hasil == 'KALAH' ) {
        skorC++;
        skorComputer.innerHTML = skorC;
    } else {
        skorP = skorP, skorC = skorC;
    }
    return;

}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            getScore(hasil);

        }, 1000);


    });
});






// function getPilihanComputer() {
//     const comp = Manth.random();
//     if(comp < 0.34) return 'BATU';
//     if(comp > 0.34 && comp < 0.67) return 'KERTAS';
//     return 'GUNTING';
// }

// function getHasil(comp, player) {
//     if(player == comp) return 'SERI';
//     if(player == 'BATU') return (comp == 'KERTAS') ? 'KALAH' : 'MENANG';
//     if(player == 'KERTAS') return (comp == 'GUNTING') ? 'KALAH' : 'MENANG';
//     if(player == 'GUNTING') return (comp == 'BATU') ? 'KALAH' : 'MENANG';
// }

// function putar() {
//     const imgComputer = document.querySelector('img-komputer');
//     const gambar = ['BATU', 'KERTAS', 'GUNTING'];
//     let i = 0;
//     const waktuMulai = new Date().getTime();
//     setInterval(function() {
//         if(new Date().getTime() - waktuMulai > 1000) {
//             clearInterval;
//             return;
//         }
//         imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
//         if(i == gambar.length) i = 0; 
//     }, 100)
// }


// const pilihan = document.querySelectorAll('li img');
// pilihan.forEach(function(pil) {
//     pil.addEventListener('click', function() {
//         const pilihanComputer = getPilihanComputer();
//         const pilihanPlayer = pil.className;
//         const hasil = getHasil(pilihanComputer, pilihanPlayer);

//         putar();

//         setTimeout(function() {
//             const imgComputer = document.querySelector('img-komputer');
//             imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//             const info = document.querySelector('.info');
//             info.innerHTML = hasil;
//         }, 1000);
//     });
// });



