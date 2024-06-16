const containerElement = document.querySelector('.text-container');

const careers = ['Operaio', 'Collaboratore Aziendale', 'Capo Squadra', 'Risorsa indispensabile', 'RISORSA', 'risorsa'];

let careerIndex = 0;
let characterIndex = 0;
updateText();

function updateText() {
    characterIndex++;
    
    let currentCareer = careers[careerIndex].slice(0, characterIndex);
    let article = determineArticle(careers[careerIndex]);
    
    containerElement.innerHTML = `<h1>Sono ${article} ${currentCareer}</h1>`;
    
    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    
    setTimeout(updateText, 150);
}

function determineArticle(career) {
    let firstChar = career.charAt(0).toLowerCase();
    let lowerCaseCareer = career.toLowerCase();
    let article;

    if (lowerCaseCareer.startsWith('risorsa')) {
        article = 'una';
    } else if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
        article = 'un\'';
    } else if (firstChar === 's' && (career.charAt(1) === 'p' || career.charAt(1) === 'c' || career.charAt(1) === 'q' || career.charAt(1) === 'r' || career.charAt(1) === 't')) {
        article = 'uno';
    } else if (firstChar === 'z' || firstChar === 'y' || career.startsWith('gn') || career.startsWith('ps')) {
        article = 'uno';
    } else {
        article = 'un';
    }

    return article;
}
