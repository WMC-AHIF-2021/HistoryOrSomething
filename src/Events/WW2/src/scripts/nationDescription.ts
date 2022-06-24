//Creation of nations
let germany: string[] = [
    "German Reich",
    "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Germany_%281935%E2%80%931945%29.svg",
    "Leader",
    "Adolf Hitler",
    "dictatorship",
    "60,898,584",
    "468,718",
    "none",
    "Germany was devastated after the first World War. " +
    "The allies fully accused Germany for the war and they imposed heavy war debts. " +
    "They wanted to keep Germany weak. " +
    "The Weimar Republic was one of the most democratic countries in europe, however, it wasn't manifested in the people’s hearts. " +
    "They, but mostly the Nazi-Party, blamed the bad economy on the harshness of the Versailles Treaty, the stab-in-the-back legend and the faults of democracy. " +
    "In both countries, Germany and Austria, the people recalled the years under autocratic rule as better, and they wanted them back. " +
    "At first, the republic managed to stay on float, with help of american money. " +
    "However, with the Wall Street Crash in 1929, the US wanted its money back. " +
    "Germany imploded with inflation and unemployment skyrocketed. " +
    "The fascist took this as a chance to take over the government in 1933 as Hitler became Chancellor. " +
    "They dissolved the parlament and established the second fascist state in europe, wanting to lead Germany to greatness under their regime."
]
let italy: string[] = [
    "Kingdom of Italy",
    "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Italy_%281861-1946%29_crowned.svg",
    "Leader",
    "Benito Mussolini",
    "dictatorship",
    "~35,700,000",
    "310,190",
    "neutral",
    "Although, being on the winner side, Italy didn't get as much as it was promised. Italy was in a poor and weak condition. " +
    "The after match were weak governments and a bad economy, such as inflation and massive debt, which angered the italian people. " +
    "This is why, many supported a man named Benito Mussolini. " +
    "His style of leadership and offer for stability convinced many italians that he could guide their nation to greatness. " +
    "In 1922, he led his fascist forces into Rome (March on Rome, 1922) and forced the king to establish a government with him as prime minister. " +
    "After 3 years, Mussolini completely dismantled the italian democracy with him in center. " +
    "Europe had its 1st fascist dictator, who calls himself „El Duce“. " +
    "A few years later, a man named Adolf Hitler would try to model himself on him."
]
let russia: string[] = [
    "Soviet Union",
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_the_Soviet_Union_%281924%E2%80%931936%29.svg",
    "Leader",
    "Josef Stalin",
    "socialist republic",
    "160,000,000",
    "~20,000,000",
    "none",
    "After the Russian Revolution, the Bolsheviks, under Vladimir Lenin, took power and established the Soviet Union. " +
    "However, Lenin soon died, due to severe health problems and Josef Stalin succeeded after his death. " +
    "Stalin ruled with an iron fist and changed Russia from and agricultural to an industrial nation. " +
    "Unlucky for the population, his rulership and the state ownership of all factories, plants and stores, " +
    "caused a disastrous famine in 1932-33, especially in the areas around Ukraine. " +
    "The Ussr prepared for a potential conflict with Germany, which was the reason for the increase in military spending."
]
let france: string[] = [
    "3rd Republic of France",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
    "President",
    "Albert Lebrun",
    "parl. republic",
    "~40,000,000",
    "550,960",
    "Allies",
    "\n" +
    "After France won the first world war, they regained their lost territory in Alsace-Lorraine. " +
    "However, they knew that Germany would want it back, so french tried to ensure the final border an the Rhine. " +
    "Also during the Great Depression, they wanted Germany to pay its debts, so when they couldn't pay it, " +
    "they occupied the Ruhr (Occupation of the Ruhr, 1923). This contributed to Germany's economic downturn and later the rise of the right wing. " +
    "The opposite in France, as the socialists grew in popularity with the French Section of the Worker’s International (SFIO) " +
    "and the communist (French communist party). While the Great Depression hit France, the left united under the Popular Front. " +
    "It also saw the socialist rise in France as the first socialist prime minister, Leon Blum, was elected in 1936. " +
    "France also supported the Republicans in the Spanish Civil-War."
]
let uk: string[] = [
    "The United Kingdom",
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
    "King",
    "George V.",
    "const. monarchy",
    "531,000,000",
    "~34,000,000",
    "Allies",
    "After the war, the UK had severe financial problems, with inflation rising and the declining of the Pound Sterling. " +
    "It also saw the outbreak of the Irish War of Independence in 1919, which remained a british dominion in the British Empire. " +
    "In the 1930s, the UK had to face the problems of far-right nationalism in Germany, Italy and Japan as they push through their expansionist ambitions."
]
let us: string[] = [
    "United States of America",
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_the_United_States_%281912-1959%29.svg",
    "President",
    "D. Roosevelt",
    "federal republic",
    "128,054,000",
    "3,531,905",
    "neutral",
    "After WW1, the US again isolated itself from europe a little more. " +
    "Overall, while not supporting the Treaty of Versailles, due to its harshness, " +
    "they either did not join the League of Nations. " +
    "They first dealt with their home problem: Alcohol. This led to the ban of alcohol. " +
    "Good for them is, that alcohol consumption decreased, however, " +
    "the consequences were the rise of criminal gangster mobs and their influence and power. " +
    "After the prosperous 20s, the United States had to deal with the Great Depression, " +
    "following the enter into a period of isolationism until the near beginning of the 1940s."
]

//Variable declaration
let descriptionBox: HTMLElement = document.getElementById('descriptionBox');

window.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
}, false);

function detectHover(area: HTMLAreaElement, countryData: string[]){
    if(descriptionBox.style.display === 'none'){
        let header: HTMLElement = document.getElementById('descriptionHeader');
        let img: HTMLImageElement = document.getElementById('descriptionImg') as HTMLImageElement;
        let title: HTMLElement = document.getElementById('leaderTitle');
        let name: HTMLElement = document.getElementById('leaderName');
        let government: HTMLElement = document.getElementById('governmentType');
        let population: HTMLElement = document.getElementById('populationCount');
        let landArea: HTMLElement = document.getElementById('areaCount');
        let faction: HTMLElement = document.getElementById('alliance');
        let text: HTMLElement = document.getElementById('descriptionText');
        header.innerText = countryData[0];
        img.src = countryData[1];
        title.innerText = countryData[2];
        name.innerText = countryData[3];
        government.innerText = countryData[4];
        population.innerText = countryData[5];
        landArea.innerText = countryData[6] + " km²";
        faction.innerText = countryData[7];
        text.innerText = countryData[8];
    }

    area.onmousedown = openDetails;
    area.onmouseleave = holdOpen;
}

function holdOpen(){
    if(descriptionBox.style.display == "block"){
        descriptionBox.style.display = "block";
    }
    else{
        descriptionBox.style.display = "none";
    }
}

function openDetails(e){
    e = e || window;
    if(e.button == 2){
        if(descriptionBox.style.display === "none"){
            descriptionBox.style.display = "block";
            descriptionBox.style.left = e.pageX + "px";
            descriptionBox.style.top = e.pageY + "px";
        }
    }
}

function closeDetails(){
    descriptionBox.style.display = "none";
}