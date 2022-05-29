var Direction;
(function (Direction) {
    Direction[Direction["left"] = -1] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["none"] = 0] = "none";
})(Direction || (Direction = {}));
const right_Btn = document.getElementById('rightSwitch');
const left_Btn = document.getElementById('leftSwitch');
const event_coords = [
    "2085,1741,2102,1738,2102,1709,2087,1685,2067,1706,2067,1726",
    "1286,1155,1304,1138,1286,1102,1269,1120,1269,1140",
    "1234,1161,1216,1167,1198,1152,1204,1132,1216,1114,1234,1140",
    "2073,907,2090,895,2090,871,2073,848,2052,863,2049,898",
    "2058,773,2073,761,2073,735,2058,711,2038,732,2038,758",
    "2231,1128,2249,1116,2246,1090,2234,1069,2214,1087,2211,1110"
];
const codeContent = [
    "<div class=\"leftSection\">\n" +
        "                <h3>Overall</h3>\n" +
        "                <p class=\"normalText\">\n" +
        "                    The First World War was a global war between 1914 and 1918, with round 40 nations involved:\n" +
        "                </p>\n" +
        "                <div class=\"allianceTableBox\">\n" +
        "                    <table class=\"allianceTable\">\n" +
        "                        <tr>\n" +
        "                            <th>Axis Powers</th>\n" +
        "                            <th>Entente</th>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td>German Empire</td>\n" +
        "                            <td>France</td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td>Austro-Hungarian Empire</td>\n" +
        "                            <td>United Kingdom</td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td>Ottoman Empire</td>\n" +
        "                            <td>Russia</td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td>Bulgaria</td>\n" +
        "                            <td>Italy</td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td></td>\n" +
        "                            <td>The United States</td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td></td>\n" +
        "                            <td>Belgium & Luxemburg</td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td></td>\n" +
        "                            <td>Japan</td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td></td>\n" +
        "                            <td>Serbia</td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td></td>\n" +
        "                            <td>MANY MORE</td>\n" +
        "                        </tr>\n" +
        "                    </table>\n" +
        "                </div>\n" +
        "                <p class=\"normalText\">\n" +
        "                    It is also known as „the Great War“ or „the War to end all wars“, as it’s one of the bloodiest wars in human history with 17 million people dead.\n" +
        "                    New technology and military tactics came into use, what the involved countries soon realised, would change the form of war, forever.\n" +
        "                </p>\n" +
        "            </div>\n" +
        "            <div class=\"rightSectionYellow\">\n" +
        "                <h3>Backstory</h3>\n" +
        "                <p class=\"normalText\">\n" +
        "                    The 1st World War is result of years of imperialism and global dominance by europe.\n" +
        "                    Thanks to the industrial revolution and the population boom, major powers like Britain, France, Germany and the USA/Japan controlled much of the world.\n" +
        "                    Politically as well as economically, leaving only a few nations independent.\n" +
        "                    However, since the unification of Germany, the balance of power in Europe has shifted.\n" +
        "                </p>\n" +
        "            </div>",
    "<div class=\"leftSection\">\n" +
        "                    <h3>\n" +
        "                        <img class=\"smallNewspaper\" src=\"imgs/zeitung.png\" onclick=\"showFullImgBox()\">\n" +
        "                        Assassination of the austrian heir\n" +
        "                    </h3>\n" +
        "                <p class=\"normalText\">\n" +
        "                    <strong>June 28, 1914 - Sarajevo:</strong> <br>\n" +
        "                    To inspect the imperial armed forces, the austro-hungarian heir, Franz Ferdinand,\n" +
        "                    visited the capital Sarajevo of the newly annexed provinces of Bosnia-Herzegovina.\n" +
        "                    This annexation provoked serbian nationalists, who believed that Bosnia should be part of Serbia.\n" +
        "                    Six assassins from a organisation known as Young Bosnia or Mlada Bosna, reinforced by the Black Hand, planned to kill the heir, in hope,\n" +
        "                    that his death would free Bosnia from the Austrians. <br>\n" +
        "                    The first attempt failed, injuring only some officers. However, one hour later,\n" +
        "                    Ferdinand returned to visit the injured officers and his car took a wrong turn.\n" +
        "                    Unfortunately, one of the assassins, Gavrilo Princip, was there and he took the chance to achieve his goal.<br><br>\n" +
        "                    The heir and his wife were shot and died shortly after.\n" +
        "                </p>\n" +
        "            </div>\n" +
        "            <div class=\"rightSection\">\n" +
        "                <img class=\"stepImg\" src=\"../../../Resources/neededImg/assassination.jpg\">\n" +
        "            </div>",
    " <div class=\"centerSection\">\n" +
        "                <div class=\"leftItem\">\n" +
        "                    <h3>\n" +
        "                        <img class=\"smallNewspaper\" src=\"imgs/zeitung.png\" onclick=\"showFullImgBox()\">\n" +
        "                        July Crisis\n" +
        "                    </h3>\n" +
        "                    <p class=\"normalText\">\n" +
        "                        What followed was the July crisis, in which Austria-Hungary accused Serbia to have helped in the murder against the heir.\n" +
        "                        They wanted the austrian Police to lead investigations, but Serbia refused. The Austrian were furious.\n" +
        "                        <br><br>\n" +
        "                        However, Serbia had a big ally: Russia. Because of this, Austria waited for support by Germany.\n" +
        "                        Its emperor, Wilhelm II., secretly assured their assistance in form of the ‚Blank check‘, which gave Austria Germany’s full support in any action.\n" +
        "                        Austria sent an ultimatum, which included extremely harsh even unfair terms. Knowing that Austria will declare war,\n" +
        "                        Serbia began to mobilize its arms and on July 28th 1914, Austria-Hungary declared war on Serbia.\n" +
        "                        This creates a chain-reaction and Russia mobilizes its troops. Because of this, Germany declares war on Russia and its ally France.\n" +
        "                    </p>\n" +
        "                </div>\n" +
        "                       <div class=\"rightItem\">" +
        "                           <h3>Schlieffen-Plan</h3>" +
        "                           <p class='normalText'>" +
        "                               Germany had a plan named „Schlieffen-Plan“, named by its creator Fieldmarshal Alfred von Schlieffen. " +
        "                               This plan was built up in a few 'short' steps:\n" +
        "                               <ul>" +
        "                                   <li class='normalListItem'>1. Russia should need much to moblize</li>" +
        "                                   <li class='normalListItem'>2. During this time, defeat France through Belgium</li>" +
        "                                   <li class='normalListItem'>3. After that's done, move all troops to the easter border</li>" +
        "                                   <li class='normalListItem'>4. Defeat Russia and win the war</li>" +
        "                               </ul>" +
        "                           </p>" +
        "                       </div>" +
        "</div>",
    "<div class=\"leftSection\">\n" +
        "                           <h3>\n" +
        "                               German Troops enter Belgium\n" +
        "                           </h3>\n" +
        "                           <p class=\"normalText\">\n" +
        "                                    The first victim to the german army was Luxembourg in August. They should be occupied until the end of the war.\n" +
        "                                    Luckily for the people of Luxembourg, they were allowed to lead their normal lives.\n" +
        "                                    <br><br>\n" +
        "                                    On August 4, 1914, German troops entered Belgium, forcing the UK to join the war on allied side.\n" +
        "                                    At first, the Germans expected to make quick progress, but Belgium resistated and slowed them down.\n" +
        "                                    In the assault for the heavily defended city of Liege, the German's most powerful weapons came to play: enormous siege cannons.\n" +
        "                                    The city was captured in August, 15.\n" +
        "                                   <br><br>\n" +
        "                                    But due to invading neutral countries and Belgium having a guarantee from Britain, which forced the UK to declare war on Germany,\n" +
        "                                   the axis powers got one enemy more.\n" +
        "                                </p>\n" +
        "                        </div>\n" +
        "                        <div class=\"rightSection\">\n" +
        "                            <img title=\"Allied propaganda\" class=\"stepImg\" src=\"imgs/ImgInvasionBelgium.jfif\">\n" +
        "                        </div>\n" +
        "            </div>",
    "<div class=\"leftSection\">\n" +
        "                <h3>The Russian Bear is ready!</h3>\n" +
        "                <p class=\"normalText\">\n" +
        "                    Russia mobilized much faster than the Triple Alliance had expected. <br>\n" +
        "                    On August 14, half a million russian forces entered eastern Prussia, and overwhelmed the local german army.\n" +
        "                    This forced Germany to send troops to the eastern front and weakened their advance in the western front.\n" +
        "                    Their goal to avoid fighting on two fronts resulted unsuccessful.<br><br>\n" +
        "                    But the Russians were poorly organised and equipped. Also, they spread their forces thin and so became fewer in numbers.\n" +
        "                    The Germans managed to stop the Russians at the Battle of Tannenberg (August 26-30, 1914).\n" +
        "                </p>\n" +
        "            </div>\n" +
        "            <div class=\"rightSection\">\n" +
        "                <img class=\"stepImg\" src=\"imgs/RussianBear.jpg\">\n" +
        "            </div>"
];
const timeText = [
    "May 20, 1914",
    "June 28, 1914",
    "July 28, 1914",
    "August 5, 1914"
];
const newspaperSrc = [
    "imgs/Newspaper_Assassination.jpg",
    "imgs/DieNeueZeitung_Ultimatum.jpg"
];
const imgContentList = [
    "imgs/ww1BackgroundImg-2.png",
    "imgs/backgroundJune28.png",
    "imgs/backgroundJune28.png",
    "imgs/backgroundAugust5.png",
    "imgs/backgroundAugust29.png"
];
right_Btn.addEventListener('click', () => {
    switchStep(Direction.right);
});
left_Btn.addEventListener('click', () => {
    switchStep(Direction.left);
});
let current = 0;
const stepCircles = document.getElementsByClassName('step');
const timeDateBox = document.getElementById('timeDate');
const myDIV = document.getElementById('mydiv');
let fullImgBox = document.getElementById('fullImgBox');
let fullImg = document.getElementById('fullImg');
/*Events*/
let assassinationEvent = document.getElementById('assassinationEvent');
let battleOfLiegeEvent = document.getElementById('battleLiege');
let battleOfCharleroiMonse = document.getElementById('battleCharleroiMonse');
let battleOfGumbinnen = document.getElementById('battleGumbinnen');
let battleOfTannenberg = document.getElementById('battleTannenberg');
let battleOfGalicia = document.getElementById('battleGalicia');
let temp;
function jumpToStep(index) {
    current = index;
    switchStep(Direction.none);
}
function switchStep(direction) {
    /*Setting everything to hidden*/
    assassinationEvent.coords = "";
    battleOfLiegeEvent.coords = "";
    battleOfCharleroiMonse.coords = "";
    battleOfGumbinnen.coords = "";
    battleOfTannenberg.coords = "";
    battleOfGalicia.coords = "";
    current += direction;
    if (current < 0) {
        current = codeContent.length - 1;
    }
    else if (current >= codeContent.length) {
        current = 0;
    }
    switch (current) {
        case 1:
            fullImg.src = newspaperSrc[0];
            assassinationEvent.coords = event_coords[0];
            break;
        case 2:
            fullImg.src = newspaperSrc[1];
            break;
        case 3:
            battleOfLiegeEvent.coords = event_coords[1];
            break;
        case 4:
            battleOfCharleroiMonse.coords = event_coords[2];
            battleOfGumbinnen.coords = event_coords[4];
            battleOfTannenberg.coords = event_coords[3];
            battleOfGalicia.coords = event_coords[5];
            break;
    }
    const contentBox = document.getElementById('stepContentID');
    const step = stepCircles[current];
    timeDateBox.innerText = timeText[current];
    myDIV.src = imgContentList[current];
    contentBox.innerHTML = codeContent[current];
    changeStepCircle(step);
}
function changeStepCircle(step) {
    if (temp != undefined) {
        temp.style.height = "1.5em";
        temp.style.width = "1.5em";
    }
    step.style.height = "3em";
    step.style.width = "3em";
    temp = step;
}
function removeFullImgBox() {
    fullImgBox.style.display = "none";
}
function showFullImgBox() {
    fullImgBox.style.display = "flex";
}
document.addEventListener('DOMContentLoaded', () => {
    switchStep(Direction.none);
});
//# sourceMappingURL=stepSwitch.js.map