//Creation of nations
const austria_hungary = [
    "Austro-Hungarian Empire",
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Austria-Hungary_%281869-1918%29.svg",
    "Emperor",
    "Franz Josef I.",
    "const. monarchy",
    "52,000,000",
    "676,443",
    "Axis Powers",
    "Austria-Hungary is was the second largest country in europe, furthermore, it was extremely ethnically diverse, " +
        "having 11 language-groups across the empire: " +
        "Germans, Hungarians, Polish, Czech, Ukrainian, Slovak, Slovene, Croatians, Serbs, Italians and Romanians. " +
        "Since 1867, the Empire had two entites: the Kingdom of Hungary and the Austrian Empire, " +
        "which both of them had Franz Joseph as their King/Emperor (k. u. k. - Monarchy). " +
        "It also possessed one oft he most modernised armies in europe, but its effectiveness was undermined by the ethnic diversities. " +
        "It also was the second fastest developing country in europe behind Germany. " +
        "They created a national bank, invested heavily in their infrastructure. " +
        "By 1900, the empire had one oft he best rail networks. industrial growth and modernisation led to better living standards, trade and wealth." +
        "The heir, Franz Ferdinand, had more liberal political views and he wanted to change things. " +
        "He supposed that only a federal solution could rescue the multi-ethnic state. " +
        "However, in 1914, Franz Ferdinand was killed in Sarajevo by a group of serbian nationalists during a official state visit."
];
const germany = [
    "German Empire",
    "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Germany_%281867%E2%80%931918%29.svg",
    "Emperor",
    "Wilhelm II.",
    "const. monarchy",
    "~66,700,000",
    "540,857",
    "Axis Powers",
    "Since the unification Germany has become one the dominant powers in not only european but also international politics. " +
        "It industrialized rapidly, modernised its political structure. This improvement clearly made its part in the influence of the German Empire." +
        "At first, Otto von Bismarck, first chancellor of the German Empire, wanted a strong relationship with Russia to isolate France " +
        "and in 1873 the Emperors of Germany, Austria-Hungary and Russia formed a defensive pact, the League of the 3 Emperors. However, " +
        "with the balcan crisis the relations between Germans and Russians highly decreased, leading to Russias diplomatic approach to France." +
        "Since the coronation of Willhelm II. and after he forced Bismarck to retire, " +
        "Germany became more isolated in both relations with Russia and the UK."
];
const italy = [
    "Kingdom of Italy",
    "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Italy_%281861-1946%29_crowned.svg",
    "King",
    "Victor Emmanuel II.",
    "const. monarchy",
    "~35,700,000",
    "287,624",
    "neutral",
    "Italy is in a tough position. Although they are allied with Germany and Austria-Hungary, their recent achievement to conquer Libya from the Ottomans, " +
        "sparked tensions between the Triple Alliance, because both of them had improving relations with the Turks. " +
        "The relation with France was also very tense, due to Italys support for Prussia in the Franco-Prussian War. " +
        "Furthermore, Italy wanted italian lands in Austria-Hungary, which put Italy at odds with the dual monarchy. " +
        "1914 was marked with politcal instability for Italy, putting the far right against the radical left."
];
const russia = [
    "Russian Empire",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Russia_%281914-1917%29.svg",
    "Tsar",
    "Nicholas II.",
    "const. monarchy",
    "164,000,000",
    "22,800,000",
    "Entente",
    "Known for it’s massive resources, its sheer size, which stretched from the north of Finland to the Siberian Coast in the east, " +
        "and its massive population/military. In peace times, Russia possessed an active force of 1.5 Million men and it was capable of recruting even more." +
        "However, economically and industrially, Russia was well behind the other european powers. " +
        "Although, major cities like Moscow and St. Petersburg began to industrialise, this only created new problems " +
        "like urban growth, social disruption,etc. Worsen the situation Russia’s political system was still languished in the late Middle Ages. " +
        "It’s leader the tsar held all power. The people were illiterate, uneducated, religious and suspicous about change." +
        "In 1904, Russia began a war with Japan over territorial ambitions in north China and Korea." +
        "They thought it was easy winnable, however, the Japanese defeated the Russians, " +
        "exposing their lack of industrialisation and their poorly equipped forces." +
        "This humiliating defeat was followed by a Revolution in 1905, which resulted in more instability." +
        "Also a big interest of Russia were the imperial ambitions in the Balkans and the desintegrating Ottoman Empire. " +
        "Resulting in a conflict with the Austro-Hungarian Empire. " +
        "They supported Serbia and its ambitions, due to their similar slavic background."
];
const france = [
    "3rd Republic of France",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
    "Prime minister",
    "Raymond Poincaré",
    "parliamentary republic",
    "~40,000,000",
    "536,464",
    "Entente",
    "Since the Franco-Prussian war France viewed Germany as an enemy, which had to be weakened. " +
        "The annexation of Alsace-Lorraine also left the population with a popular view of one day reclaiming the lost territory. " +
        "In 1894 they formed an defensive alliance with Russia, after they abondoned their relation with Germany. " +
        "And luckily for France, the UK ended its isolated policy and formed an alliance with France. "
];
const serbia = [
    "Kingdom of Serbia",
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Kingdom_of_Serbia_from_1882-1918.png",
    "King",
    "Peter I Karađorđević",
    "const. monarchy",
    "~40,000,000",
    "~80,000",
    "guarantee by Russia",
    "In the last decades, Serbia managed to escape Austria's grip, develop industrial manufactures and to modernise." +
        "Serbia become a harbour of serbian nationalism and future slavic scenarios, against Austria. " +
        "Tensions started to rise as more nationalist groups formed in Austria-Hungary, especially in the newly annexed region of Bosnia-Herzegovina, " +
        "in which many Serbs wanted all slavs to be united."
];
const turkey = [
    "Ottoman Empire",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg",
    "Sultan",
    "Mehmed V.",
    "const. monarchy",
    "24,000,000",
    "~1,800,000",
    "Axis powers",
    "The Ottoman Empire was commonly known as „the sick man of europe“, due to its weakening grip on african and balkan territories " +
        "since its defeat by the combined force of Austrians, Germans and Poles in the 17th century. Weak sultans and like many other powers, " +
        "the Ottomans were confronted with nationalism and opposition, which lead to territorial losses like Algeria to France, Egypt to Britain " +
        "and the wars in the Balkans.Its alignment before WW1 was questionable. Many people in the empire wanted to stay neutral, " +
        "others wanted to ally with Germany, but there also were many who supported allied alignment. " +
        "However, it was Germany’s strong position against Russia, that lead to the Ottomans decision to ally with Germany."
];
const uk = [
    "The United Kingdom",
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
    "King",
    "George V.",
    "const. monarchy",
    "45,300,000",
    "313,884",
    "Entente",
    "The UK was the world’s largest nation and it dominated the globe. " +
        "In the last years, its leaders focused on imperial expansion, avoiding war and neutrality in europe. " +
        "This policy was named ‚splendid isolation‘. " +
        "In the 19th century, the Uks main rival was Russia, in competition for territory and influence. " +
        "However Russia was defeated in the Crimean War, leaving Britain as victor. " +
        "The relations remained low, until a new rival emerged, Germany. Germany’s expansionist and nationalist policies refocused Britain's " +
        "suspicion that it might seek to dominate europe, which Emperor Wilhelm II., with his hot-headed imperial ambitions, worsened." +
        "However, in the beginning of the 20th century this policy changed and the UK, also, began to create Alliances. " +
        "British diplomats formed the Entente Cordianale with France, leading to the Triple Entente in 1907 with Russia."
];
const bulgaria = [
    "Kingdom of Bulgaria",
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
    "Tsar",
    "Ferdinand I.",
    "const. monarchy",
    "4,580,000",
    "122,134",
    "neutral",
    "Bulgaria was busted from the recent balkan wars and it wanted to regain its lost territory. " +
        "It was political isolated and still recovering from its economic and demographic damage. " +
        "They were blamed for the dissolution of the balkan league and their defeat in the 2nd Balkan war focused their policy on revanchism, " +
        "which was the reason for their big support for the central powers. "
];
//Variable declaration
let descriptionBox = document.getElementById('descriptionBox');
let loaded = false;
const nations = [
    austria_hungary,
    germany,
    italy,
    italy,
    italy,
    italy,
    italy,
    russia,
    serbia,
    bulgaria,
    turkey,
    france,
    france,
    france,
    uk,
    uk,
    uk,
    uk,
    uk,
    russia
];
const nationsArea = [
    kukArea,
    germanyArea,
    italyArea,
    rhodosArea,
    italianGreece1Area,
    italianGreece2Area,
    sardiniaArea,
    russiaArea,
    serbiaArea,
    bulgariaArea,
    turkeyArea,
    franceArea,
    algeriaArea,
    corsicaArea,
    ukArea,
    irelandArea,
    maltaArea,
    shetlandArea,
    isleOfManArea,
    crimeaArea
];
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);
function detectHover(index) {
    let area = nationsArea[index];
    let countryData = nations[index];
    if (descriptionBox.style.display === "none") {
        let header = document.getElementById('descriptionHeader');
        let img = document.getElementById('descriptionImg');
        let title = document.getElementById('leaderTitle');
        let name = document.getElementById('leaderName');
        let government = document.getElementById('governmentType');
        let population = document.getElementById('populationCount');
        let area = document.getElementById('areaCount');
        let faction = document.getElementById('alliance');
        let text = document.getElementById('descriptionText');
        header.innerText = countryData[0];
        img.src = countryData[1];
        title.innerText = countryData[2];
        name.innerText = countryData[3];
        government.innerText = countryData[4];
        population.innerText = countryData[5];
        area.innerText = countryData[6] + " km²";
        faction.innerText = countryData[7];
        text.innerText = countryData[8];
        loaded = true;
    }
    area.onmousedown = openDetails;
    area.onmouseleave = holdOpen;
}
function holdOpen() {
    if (descriptionBox.style.display == "block") {
        descriptionBox.style.display = "block";
    }
    else {
        descriptionBox.style.display = "none";
    }
}
function openDetails(e) {
    e = e || window;
    if (e.button == 2) {
        if (descriptionBox.style.display === "none") {
            descriptionBox.style.display = "block";
            descriptionBox.style.left = e.pageX + "px";
            descriptionBox.style.top = e.pageY + "px";
        }
    }
}
function closeDetails() {
    descriptionBox.style.display = "none";
}
//# sourceMappingURL=nationDescription.js.map