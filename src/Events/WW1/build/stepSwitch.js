var Direction;
(function (Direction) {
    Direction[Direction["left"] = -1] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["none"] = 0] = "none";
})(Direction || (Direction = {}));
const right_Btn = document.getElementById('rightSwitch');
const left_Btn = document.getElementById('leftSwitch');
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
        "                <h3>Assassination of Franz Ferdinand</h3>\n" +
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
    "<div style='overflow: hidden' class=\"leftSection\">\n" +
        "                <img class=\"stepImg\" src=\"imgs/SerbiaUltimatum.jpg\">\n" +
        "            </div>\n" +
        "            <div style='overflow-y: scroll' class=\"rightSection\">\n" +
        "                <h3>July Crisis</h3>\n" +
        "                <p class=\"normalText\">\n" +
        "                       What followed was the July crisis, in which Austria-Hungary accused Serbia to have helped in the murder against the heir. " +
        "                       Austria wanted to estinguish serbian nationalism, however, Serbia had a big ally: Russia. <br>" +
        "                       Because of this, Austria waited for support by Germany. " +
        "                       Its emperor, Willhelm II., secretly assured their assistance in form of the ‚Blank check‘, which gave Austria Germany’s full support in any action. " +
        "                       Austria sent an ultimatum, which included extremely harsh even unfair terms. <br><br>" +
        "                       Knowing that Austria will declare war, Serbia began to mobilize its arms and on July 28th 1914, Austria-Hungary declared war on Serbia. " +
        "                       One thing leads to another and peace in europe has ended." +
        "                </p>\n" +
        "            </div>",
];
const timeText = [
    "May 20, 1914",
    "June 28, 1914",
    "July 28th 1914",
];
const imgContentList = [
    "imgs/ww1BackgroundImg-2.png",
    "imgs/backgroundJune28.png",
    "imgs/backgroundJune28.png"
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
let temp;
function jumpToStep(index) {
    current = index;
    switchStep(Direction.none);
}
function switchStep(direction) {
    current += direction;
    if (current < 0) {
        current = codeContent.length - 1;
    }
    else if (current >= codeContent.length) {
        current = 0;
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
        temp.style.height = "2em";
        temp.style.width = "2em";
    }
    step.style.height = "3em";
    step.style.width = "3em";
    temp = step;
}
document.addEventListener('DOMContentLoaded', () => {
    switchStep(Direction.none);
});
//# sourceMappingURL=stepSwitch.js.map