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
        "            <div class=\"rightSection\">\n" +
        "                <h3>Backstory</h3>\n" +
        "                <p class=\"normalText\">\n" +
        "                    The 1st World War is result of years of imperialism and global dominance by europe.\n" +
        "                    Thanks to the industrial revolution and the population boom, major powers like Britain, France, Germany and the USA/Japan controlled much of the world.\n" +
        "                    Politically as well as economically, leaving only a few nations independent.\n" +
        "                    However, since the unification of Germany, the balance of power in Europe has shifted.\n" +
        "                </p>\n" +
        "            </div>"
];
right_Btn.addEventListener('click', () => {
    switchStep(Direction.right);
});
left_Btn.addEventListener('click', () => {
    switchStep(Direction.left);
});
let current = 0;
const stepCircles = document.getElementsByClassName('step');
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