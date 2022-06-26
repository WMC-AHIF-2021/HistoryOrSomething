enum Direction {
    left = -1,
    right = 1,
    none = 0
}

const right_Btn: HTMLElement = document.getElementById('rightSwitch');
const left_Btn: HTMLElement = document.getElementById('leftSwitch');

const event_coords: string[] = [
    "2085,1741,2102,1738,2102,1709,2087,1685,2067,1706,2067,1726",
    "1313,1162,1254,1112",
    "1239,1163,1190,1116",
    "2090,771,2035,721",
    "2096,914,2049,872",
    "2261,1127,2211,1077",
    "2225,1679,2167,1621",
    "2425,1221,2366,1165",
    "1125,1294,1072,1239",
    "2140,861,2090,805",
    "1160,1107,1110,1057",
    "2404,1217,2343,1158",
    "1225,1290,1157,1220",
    "2120,1030,2055,965",
    "2196,1197,2140,1147",
    "1160,1122,1107,1075",
    "2666,1948,2607,1895",
    "2199,1670,2140,1728",
    "2316,1839,2258,1777",
    "1750,1548,1685,1487",
    "1169,1144,1122,1097",
    "2255,864,2325,940",
    "2457,1175,2393,1110",
    "1327,1312,1263,1253",
    "1175,1245,1113,1181",
    "1289,676,1187,588",
    "1771,1573,1703,1517",
    "1166,1124,1110,1071",
    "2443,756,2457,750,2460,727,2443,700,2425,718,2425,741",
    "2686,1443,2704,1434,2704,1407,2692,1390,2671,1402,2666,1425",
    "3000,1396,3015,1384,3015,1363,3000,1343,2983,1355,2980,1378",
    "2806,1052,2821,1044,2824,1020,2806,994,2783,1011,2783,1032",
    "2900,504,2918,498,2918,469,2903,445,2883,463,2883,492",
    "2407,236,2425,224,2425,203,2407,177,2387,195,2387,212",
    "1181,1307,1134,1260",
    "1468,899,1486,887,1486,864,1468,843,1454,864,1454,878",
    "1515,1299,1536,1293,1539,1258,1521,1231,1504,1240,1492,1261,1498,1284",
    "1721,1004,1735,1002,1738,975,1721,952,1703,969,1703,987",
    "2049,767,2067,758,2064,729,2049,702,2032,717,2020,737,2026,755",
    "1750,1546,1700,1488",
    "2463,1895,2407,1843",
    "2806,1848,2757,1795"
]

const codeContent: string[] = [
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
    "                            <td><a class='stateLink' href='../../../Nations/TimesOf_Germany/src/german-1914.html'>German Empire</a></td>\n" +
    "                            <td><a class='stateLink' href='../../../Nations/TimesOf_France/France1939.html'>France</a></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Austro-Hungarian Empire</td>\n" +
    "                            <td><a class='stateLink' href='../../../Nations/united-kingdom/src/UK1922.html'>United Kingdom</a></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Ottoman Empire</td>\n" +
    "                            <td>Russia</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Bulgaria</td>\n" +
    "                            <td><a class='stateLink' href='../../../Nations/TimesOf_Italy/src/Italy1914.html'>Italy</a></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td></td>\n" +
    "                            <td>The United States</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td></td>\n" +
    "                            <td><a class='stateLink' href='../../../Nations/TimesOf_Greece/src/Greece1890.html'>Greece</a></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td></td>\n" +
    "                            <td><a class='stateLink' href='../../../Nations/TimesOf_Japan/src/Japan1905.html'>Japan</a></td>\n" +
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
    "                                    the axis powers got one enemy more.\n" +
    "                                    The UK also possessed the greatest sea force and immidietly established a naval blockade on Germany " +
    "                                    after their attack on Belgium.\n" +
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
    "            </div>",

    "<div class=\"leftSection\">\n" +
    "                <h3>\n" +
    "                    The Germans are near Paris!\n" +
    "                </h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    Back at the western front, the allies were not able to stop the german forces. The Germans entered deep into french territory and almost reached Paris.\n" +
    "                    The French and the British fled behind the river Marne to reorganize and refocus. The Germans could have taken Paris but decided to further encircle\n" +
    "                    the enemy army in the south. <br><br>\n" +
    "                    However, a french force unit gathered in Paris and almost cut into the german flank. They met in the Battle of Marne and it will\n" +
    "                    become one of the most important battles in WW1. It resulted in a german defeat and they had to reatreat.\n" +
    "                    Their goal to take Paris and to win the war early was ruined.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"rightSection\">\n" +
    "                <img class=\"stepImg\" src=\"https://upload.wikimedia.org/wikipedia/commons/3/3b/German_soldiers_Battle_of_Marne_WWI.jpg\">\n" +
    "            </div>",

    "<div class=\"leftItem\">\n" +
    "                    <h3>\n" +
    "                        Race to the coast\n" +
    "                    </h3>\n" +
    "                    <p class=\"normalText\">\n" +
    "                        The Germans are retreating.<br>\n" +
    "                        And while they do that, both side try to outflank each other to the North until they reach the coast to the english canal.\n" +
    "                        The remaining belgian army just manages to escape into allied side, before they would have gotten imprisoned by the Germans.\n" +
    "                        <br><br>\n" +
    "                        Now that there is no space to get past the enemy lines, the Germans decide to dig in for a better defensive position.\n" +
    "                        They dig so called 'trenches'. The allies do the same.<br>\n" +
    "                        This trench-line reaches from the northern coast of Belgium all the way down to the border to Switzerland, a total of 760 km.\n" +
    "                        The front in the west has become a war of nutrition.<br>\n" +
    "                        Britain imposes a large naval blockade, while Germany orders its submarines to sink all british ships and vessels.\n" +
    "                        Also, during this time, air technology first came into use as planes were used for observasion, then after time, for bombing.\n" +
    "                        Behind the front lines, every ressource is used for war effort. Women work tirelessly in Iron factories to supply the war." +
    "                    </p>\n" +
    "                </div>\n" +
    "                <div class=\"rightItem\">\n" +
    "                    <h3>\n" +
    "                        What is a Trench-System?\n" +
    "                    </h3>\n" +
    "                    <p class=\"normalText\">\n" +
    "                        A trench is hole or a system dug into the ground (mostly in woods or fields), that serves for better defensive position.\n" +
    "                        These defensive positions make it extremely difficult to gain any more ground or even get past\n" +
    "                        the enemy side, especially when both sides use this system.\n" +
    "                    </p>\n" +
    "                    <div class=\"imgBox\">\n" +
    "                        <img class=\"stepImg\" src=\"imgs/TrenchesImg.jpg\">\n" +
    "                    </div>\n" +
    "                    <h3>What is Trench-Warfare?</h3>\n" +
    "                    <p class=\"normalText\">\n" +
    "                        Trench-Warfare in which opposing sides attack, counterattack and defend from mostly permanent systems of trenches.\n" +
    "                        The distance between the sides variates from 50 to 300 meters.\n" +
    "                        During this warfare, the defensive fighters, who possess the bigger firepower have the advantage. To the disadvantage of\n" +
    "                        the attacker as he would run over the so called 'No-Man's land' and try to reach the enemy side.\n" +
    "                        During the 1st World War more than 4 million men.\n" +
    "                    </p>\n" +
    "                </div>",

    " <div class=\"centerSection\">\n" +
    "<div class=\"middleItemBox\">\n" +
    "                    <div class=\"middleItem\">\n" +
    "                        <h2 style=\"border-bottom: 1px solid black; padding-bottom: 0.5em\">The Ottomans join the war!\n" +
    "                            <img class=\"smallNewspaper\" src=\"imgs/zeitung.png\" onclick=\"showFullImgBox()\">\n" +
    "                        </h2>\n" +
    "                        <p class=\"normalText\">\n" +
    "                            In the last years, the Ottomans were split between the ones who supported the Entente, the ones who wanted to stay neutral\n" +
    "                            and at last, the side, which wanted to ally with Germany, due to its strong position against Russia.\n" +
    "                            In the end, the Ottomans were more in favour for Germany and purchased a small fleet of german ships, still manned by their German\n" +
    "                            crews and admirals.\n" +
    "                            Luckily for them, the Russians currently struggled at the eastern front and the Turks took this chance.<br>\n" +
    "                            On October 29, 1914, these ships carried out a raid against the Russians in the Black Sea. And a few days later, on 5 November 1914,\n" +
    "                            the Russians responded with the declaration of war.<br><br>\n" +
    "\n" +
    "                            However, the Turks were far from ready for war.\n" +
    "                            The Empire was an agricultural state surrounded by industrial powers and\n" +
    "                            it still felt the economic impacts of the last Balkan Wars.<br><br>\n" +
    "\n" +
    "                            Now they have to fight against Russia in the Caucasus. The UK tries to invade Mesopotamia to seize oil resources." +
    "                            The Central Powers respond by attacking the Suez canal, to cut the communication between the UK and its supplying colony India." +
    "\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>" +
    "</div>",

    "<div class=\"leftItem\">\n" +
    "                <h3>\n" +
    "                    Armenian Genocide\n" +
    "                    <img class=\"smallNewspaper\" src=\"imgs/zeitung.png\" onclick=\"showFullImgBox()\">\n" +
    "                </h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    The Armenians were a large foreign group inside the Ottoman Empire, occupying a large place in ottoman society.\n" +
    "                    Before World War 1, the Ottomans lost a large amount of their former land (Libya to Italy, Balkan Wars, etc.) and were\n" +
    "                    afraid that the Armenians also would seek independence. This would be crucial for the Turks since the Armenians were wide spread\n" +
    "                    in their eastern territories and in areas the Turks viewed as their own heartland.<br><br>\n" +
    "                    Massacres and deportations already happened in the past in the 1890s and in 1909, but the worst is still to come.\n" +
    "                    The Ottoman offensive in the caucasus have failed and now, the Turks have to retreat. The turkish government accuses the armenian people\n" +
    "                    to have supported Russia. <br>\n" +
    "                    This would be the beginning of a massive massacre on the armenian people as more than half of the armenian population would be killed during\n" +
    "                    the next years. They would be forced to turn to Islam, literally march to death or even murdered on the place.\n" +
    "                </p>\n" +
    "                <div class=\"imgBox\">\n" +
    "                    <img class=\"stepImg\" src=\"https://upload.wikimedia.org/wikipedia/commons/4/48/Column_of_deportees_walking_through_Harput_vilayet_during_the_Armenian_genocide.jpg\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"rightItem\">\n" +
    "                <h3>\n" +
    "                    Gallipoli campaign\n" +
    "                </h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    Russia is isolated from its allies in the west and that's a huge problem, which the Entente wants to change.<br><br>\n" +
    "                    The allies want to create a sea supply route via the Dardanelles strait. In March, franco-british ships enter the strait\n" +
    "                    and fire at turkish ports but ultimately have to retreat due to sea mines. One month later, they organize a land attack to conquer the strait\n" +
    "                    by land.<br>\n" +
    "                    However, the Ottomans fight back and this front, too, becomes deadlocked.\n" +
    "                </p>\n" +
    "                <div class=\"imgBox\">\n" +
    "                    <img class=\"stepImg\" src=\"https://upload.wikimedia.org/wikipedia/commons/4/4f/G.C._18_March_1915_Gallipoli_Campaign_Article.jpg\">\n" +
    "                </div>\n" +
    "            </div>",

    "<div class=\"leftItem\">\n" +
    "                <h3>\n" +
    "                    Bad reputation\n" +
    "                </h3>\n" +
    "                <div class=\"imgBox\">\n" +
    "                    <img class=\"stepImg\" src=\"https://upload.wikimedia.org/wikipedia/commons/8/81/Bundesarchiv_DVM_10_Bild-23-61-17%2C_Untergang_der_%22Lusitania%22.jpg\">\n" +
    "                </div>\n" +
    "                <p class=\"normalText\">\n" +
    "                    The US is neutral and in the beginning of the war, they wished to stay so. And luckily for Germany, many ethnic Germans live\n" +
    "                    in the US, who have high support for their home country.<br><br>\n" +
    "                    However, due to allied propaganda and Germany sinking civilian ships, support decreases over time.<br>\n" +
    "                    On 7 May 1915 german submarines sink the civilian ship Lusitania. killing 1200 people including 128 US citizens.\n" +
    "                    In reaction, massive protests against Germany occur across the US and to avoid that the US joins the war, Germany slows its submarine warfare.\n" +
    "                    In reaction, massive protests against Germany occur across the US and to avoid that the US joins the war, Germany slows its submarine warfare.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"rightItem\">\n" +
    "                <h2 style=\"border-bottom: 1px solid black; padding-bottom: 0.3em\">New Participants</h2>\n" +
    "                <h3>\n" +
    "                    Italy declares war on Austria-Hungary\n" +
    "                    <img class=\"smallNewspaper\" src=\"imgs/zeitung.png\" onclick=\"showFullImgBox()\">\n" +
    "                </h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    Italy actually had a defensive pact with the Central Powers, however, since Austria was the one to attack first, Italy didn't participate\n" +
    "                    until now. Since then, the allies tried to persuade Italy to join the war on allied side. They managed to convince them for new territory\n" +
    "                    along the adriatic coast and in Tyrol.<br>\n" +
    "                    On May 23th, 1915, Italy declared war on Austria-Hungary.\n" +
    "                </p>\n" +
    "                <h3>Bulgaria joins the Central Powers</h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    Bulgaria lost a big amount of land in the past Balkan wars, which it wished to regain, especially from Serbia.\n" +
    "                    And because Serbia was on allied side, the best allies Bulgaria could get were the Central Powers.<br>\n" +
    "                    On October 14th, 1915, Bulgaria joined the Central Powers and together, they managed to invade Serbia.<br><br>\n" +
    "                    Allied response came with the violation of greek neutrality as they landed in the greek port of Salonica, however, Serbia is already\n" +
    "                    lost. The remaining serbian army flees through Albania.\n" +
    "                </p>\n" +
    "            </div>",

    "<div class=\"leftItem\">\n" +
    "                <h3>Battle of Verdun</h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    Germany knows that the front in the west will stay deadlocked. So they plan to shorten France's resources so much that\n" +
    "                    they would be forced to sue for peace. They wanted to conquer a place, which is easy to defend against attackers. This place should be city of\n" +
    "                    Verdun. After Verdun is conquered, the Germans would let the french try to retake it. Over and over again, costing millions of lives for\n" +
    "                    the french.<br>\n" +
    "                    However, the plan to take control over the city failed and the battle resulted in a bloodbath for both sides, which should take on for almost a\n" +
    "                    year.\n" +
    "                </p>\n" +
    "                <div class=\"imgBox\">\n" +
    "                    <img class=\"stepImg\" src=\"https://upload.wikimedia.org/wikipedia/commons/2/2e/Soldats-fran%C3%A7ais-attaque.jpg\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"rightItem\">\n" +
    "                <h3>Plans for Ottoman territory</h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    After Britain lost it's siege at Kut, they seek support. They secretly plan the partition of ottoman land at the end of the war.\n" +
    "                    They also support arab rebels starting in Mecca, offering them independence when the war is won.\n" +
    "                </p>\n" +
    "                <h3>Brusilov offensive</h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    The Battle of Verdun already goes on since the beginning of 1916 and since then many, really many men died. Italy is also under pressure\n" +
    "                    by Austria-Hungary in the still ongoing front.\n" +
    "                    Because of this, Russia wants to relieve its allies and starts massive offensive, causing more casualties on both sides.\n" +
    "                </p>\n" +
    "            </div>",

    "<div class=\"leftItem\">\n" +
    "                <h3 style=\"border-bottom: 1px solid black; padding-bottom: 0.4em\">War fatigue</h3>\n" +
    "                <div class=\"imgBox\">\n" +
    "                    <img class=\"stepImg\" src=\"imgs/TurnipWinter.jpg\">\n" +
    "                </div>\n" +
    "                <p class=\"normalText\">\n" +
    "                    While Romania joins the war on allied side the Brusilov Offensive, both the Battle of the Somme and the Battle of Verdun end. More than over 3 million men died in combat\n" +
    "                    and many more were wounded or broken mentally for the rest of their lives. On both sides, moral is low and exhaustion is high.<br>\n" +
    "                    In Germany, the british blockade and the war effort create a national famine, known as Turnip Winter.<br><br>\n" +
    "                    Luckily for the allies, they have access to the atlantic ocean. They get their supplies from their colonies and namely the US, towards who\n" +
    "                    they're now in debt.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"rightItem\">\n" +
    "                <h4>Germany reactivates their naval warfare</h4>\n" +
    "                <p class=\"normalText\">\n" +
    "                    They allies get their supplies via the atlantic. Germany knows that if this goes on, they will soon be the first to collapse and\n" +
    "                    so they relaunch unrestricted submarine warfare, with the objective to sink all supply ships to the Entente.\n" +
    "                </p>\n" +
    "                <h4>\n" +
    "                    Zimmermann-Telegram\n" +
    "                    <img class=\"smallNewspaper\" src=\"imgs/zeitung.png\" onclick=\"showFullImgBox()\">\n" +
    "                </h4>\n" +
    "                <p class=\"normalText\">\n" +
    "                    To distract the United States, Germany sends a telegram to Mexico, offering an alliance against the US. However, the message\n" +
    "                    was intercepted by the UK and brought to the United States, which now prepares for war.\n" +
    "                </p>\n" +
    "            </div>",

    "<div class=\"leftItem\">\n" +
    "                <h3>\n" +
    "                    February Revolution\n" +
    "                </h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    At first, the russian people had high support for Russia joining the war, but as the Germans began to counterattack and to win land," +
    "                    Support decreased. Adding that Russia was an unmodernised, agricultural state and the czar being unable to improve the situation," +
    "                    the population soon would be willing to take matters into their own hands." +
    "                    In Russia, revolts break out all over the country and force Czar Nicholas to abdicate. A provisional government is found, but\n" +
    "                    continues the war. This is bad news for Germany, because this means that its eastern troops won't be set free.<br><br>\n" +
    "                    Worsen the situation, the US now officially declares war on Germany, but will still need time for their troops to arrive in europe.\n" +
    "                </p>\n" +
    "                <div class=\"imgBox\">\n" +
    "                    <img class=\"stepImg\" src=\"https://upload.wikimedia.org/wikipedia/commons/8/86/Manifestaci%C3%B3nAFavorDeLaRep%C3%BAblicaPetrogrado1917--russiainrevolut00jone.jpg\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"rightItem\">\n" +
    "                <h3>Palestine</h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    Britain and its allies are near Palestine and to gain the support of the jewish people, they offer the creation of jewish state in Palestine.\n" +
    "                    All of this is stated in the Balfour Declaration.\n" +
    "                </p>\n" +
    "                <h3>Greece is joining in </h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    Greece in split between its king, who favours Germany, and its prime minister, who is more in favour of the Entente. <br>\n" +
    "                    In the end, the prime minister wins and under pressure of the allies, Greece joins the war.\n" +
    "                </p>\n" +
    "            </div>",

    "<div class=\"leftItem\">\n" +
    "                <h3>\n" +
    "                    Russian Revolution\n" +
    "                </h3>\n" +
    "                <div class=\"imgBox\">\n" +
    "                    <img class=\"stepImg\" src=\"imgs/RussianRevolution.jpg\">\n" +
    "                </div>\n" +
    "                <p class=\"normalText\">\n" +
    "                    The February Revolt resulted in the abdication of the Czar and the establishment of the provisional government. However, this new government\n" +
    "                    didn't pull Russia out of the war, what many russians had actually hoped for. What followed was another major revolt led by the\n" +
    "                    Bolsheviks and their leader Wladimir Lenin. They took over and negotiated an armistice, but this eventually\n" +
    "                    failed. The Germans attacked again and made heavy progress. This forced the Bolsheviks so sign a peace treaty, the Treaty of Brest-Litovsk.\n" +
    "                    This treaty stated the 'liberation' of major nation like Ukraine, Poland, Lithuania, Belarus and many more, which have been under russian control\n" +
    "                    before. <br>\n" +
    "                    Russia was busted as important industrial and developed territories were ripped away from them.\n" +
    "                    Shortly after, Russia would fall into a civil war.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"rightItem\">\n" +
    "                <h3>\n" +
    "                    Spring Offensive\n" +
    "                </h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    With Russia out of the game, Germany can show its full power. In a last attempt to reach Paris before american troops arrive,\n" +
    "                    they start heavy attacks and even reach the river Marne again, but the advantage soon wears off.<br>\n" +
    "                    The enemies meet again in the Second Battle of Marne and the Germans, like last time, are defeated.\n" +
    "                    Now, the allies have the upper hand and are starting to counterattack.\n" +
    "                </p>\n" +
    "                <div class=\"imgBox\">\n" +
    "                    <img class=\"stepImg\" src=\"https://upload.wikimedia.org/wikipedia/commons/b/bf/The_German_Spring_Offensive%2C_March-july_1918_Q8619.jpg\">\n" +
    "                </div>\n" +
    "            </div>",

    "<div class=\"leftItem\">\n" +
    "                <h3>\n" +
    "                    Falling Empires\n" +
    "                </h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    After Germany spend its last resources on the spring offensives, the Entente began an invasion in the balkans against bulgaria and its occupied\n" +
    "                    territories. The Central Powers were powerless and on 29 September 1918 Bulgaria was the first to surrender. A few weeks later, the allies\n" +
    "                    managed to liberate Serbia and Montenegro.\n" +
    "                    Bulgaria signed an armistice and now the Ottomans are isolated. Which only fastened the next downfall.<br>\n" +
    "                    The british, french and their allies already conquered all the way up to Damascus and threatened ottoman heartland. Now, that they're cut\n" +
    "                    from their allies, the Turks are forced to sign an armistice too.<br><br>\n" +
    "                    The Central Powers lose on all fronts. Austria now retreats on both lines, in Italy and in the balkans. Also, the dual monarchy has to deal\n" +
    "                    with inner unrest as slovaks, hungarians, czech, romanians, etc. begin to revolt for independence. On 3 November 1918 Austria, too, surrenders and signs\n" +
    "                    an armistice.<br><br>\n" +
    "                    Now only Germany is left.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"rightItem\">\n" +
    "                <h3>\n" +
    "                    November Revolution\n" +
    "                    <img class=\"smallNewspaper\" src=\"imgs/zeitung.png\" onclick=\"showFullImgBox()\">\n" +
    "                </h3>\n" +
    "                <p class=\"normalText\">\n" +
    "                    The people are tired of war. They ignore commands and start to revolt. Sailors refuse to fight against the Royal Navy, which would later\n" +
    "                    be known as the Kiel Mutiny. Across the country, chaos starts to spread and the Emperor has to abdicate. <br>\n" +
    "                    Germany's new government wants an armistice, which is signed on 11 November 1918.<br><br>\n" +
    "                    The war, which ruined and even ended the lives of millions, finally came to an end." +
    "                </p>\n" +
    "                <div class=\"imgBox\">\n" +
    "                    <img\n" +
    "                            class=\"stepImg\" \n" +
    "                            src=\"https://upload.wikimedia.org/wikipedia/commons/8/8b/Bundesarchiv_Bild_183-B0527-0001-810%2C_Berlin%2C_Brandenburger_Tor%2C_Novemberrevolution.jpg\"\n" +
    "                    >\n" +
    "                </div>\n" +
    "            </div>",

    "<div class=\"middleItemBox\">\n" +
    "                <div class=\"centerContent\">\n" +
    "                    <div class=\"headerText\">\n" +
    "                        <h2 style=\"text-align: center\">The End of the Great War</h2>\n" +
    "                        <p class=\"normalText\">\n" +
    "                            With the surrender of Germany the Great War finally finds an end. The allied victors gather in Paris to negotiate peace.\n" +
    "                            Also, the US proposes a peace plan and the creation of the League of Nations to prevent wars like this one.\n" +
    "                            The major members of this peace talks are France, Britain, the US, Italy, as well as Japan, who participated in the Pacific, which\n" +
    "                            they would later be allowed to keep. Together they create following peace treaties:\n" +
    "\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div class=\"treatyBox1\">\n" +
    "                        <div class=\"treatyHeaderBox\">\n" +
    "                            <h3 class=\"treatyHeader\">Treaty of Versailles</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"treatyImgBox\">\n" +
    "                            <img class=\"treatyImg\" src=\"../../../Resources/neededImg/writing.png\">\n" +
    "                        </div>\n" +
    "                        <div class=\"treatyTextBox\">\n" +
    "                            <p class=\"normalText\">\n" +
    "                                Versailles! This was the place were the German Empire was proclaimed and french revanchism began. This should also be\n" +
    "                                the place where Germany would have to sign a treaty, which completely humiliates german pride. Clearly, this was certainly\n" +
    "                                the goal of the French. They wanted to keep Germany weak, unable to ever become a serious enemy again.<br>\n" +
    "                                Germany loses 20% of its territory and also has to pay huge war debt to the allies. Making matters worse, Germany, together with its\n" +
    "                                allies, is fully blamed for the war. <br>\n" +
    "                                The german people a furious and see this treaty as a humiliation.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"treatyBox2\">\n" +
    "                        <div class=\"treatyHeaderBox\">\n" +
    "                            <h3 class=\"treatyHeader\">Treaty of Saint-Germain</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"treatyImgBox\">\n" +
    "                            <img class=\"treatyImg\" src=\"../../../Resources/neededImg/writing.png\">\n" +
    "                        </div>\n" +
    "                        <div class=\"treatyTextBox\">\n" +
    "                            <p class=\"normalText\">\n" +
    "                                Austria isn't in a good state. Multiple states already proclaimed independence, as well as German-Austria and even Hungary.\n" +
    "                                However, the losers don't have a say in the peace negotiation and so, they would also have to lose land and pay war debts.\n" +
    "                                New states like Czechoslovakia and the new Kingdom of Yugoslavia are formed and already existing countries like Romania and Italy\n" +
    "                                get new lands. Romania get control over the region of Transylvania and Italy now possesses South Tyrol and lands across\n" +
    "                                the adriatic sea.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"treatyBox3\">\n" +
    "                        <div class=\"treatyHeaderBox\">\n" +
    "                            <h3 class=\"treatyHeader\">Treaty of Lausanne</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"treatyImgBox\">\n" +
    "                            <img class=\"treatyImg\" src=\"../../../Resources/neededImg/writing.png\">\n" +
    "                        </div>\n" +
    "                        <div class=\"treatyTextBox\">\n" +
    "                            <p class=\"normalText\">\n" +
    "                                It manifested peace and the dissolution of the Ottoman Empire and its territory.\n" +
    "                                It defines many of today's border in the near east.\n" +
    "                                Despite this, many allies of the entente felt cheated like the Emirate of Asir, which would later become Saudi-Arabia.\n" +
    "                                They were promised way more land than they actually got. But they were not the only one.\n" +
    "                                To keep everyone on board, the British often gave unattainable promises.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>"
]

const timeText: string[] = [
    "May 20, 1914",
    "June 28, 1914",
    "July 28, 1914",
    "August 5, 1914",
    "August 29, 1914",
    "September, 1914",
    "October, 1914",
    "January, 1915",
    "April, 1915",
    "October, 1915",
    "July, 1916",
    "December, 1916",
    "October 1917",
    "July 1918",
    "November 1918",
    "September, 1919"
]

const newspaperSrc: string[] = [
    "imgs/Newspaper_Assassination.jpg",
    "imgs/DieNeueZeitung_Ultimatum.jpg",
    "imgs/OttomanEntryNewspaper.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/1915_New_York_Times_Armenian_Genocide_article.png",
    "imgs/Newspaper_ItalyEntry.jpg",
    "imgs/ZimmermannTelegramNewspaper.jpg",
    "imgs/NovemberRevolution.png"
]

const imgContentList: string[] = [
    "imgs/ww1BackgroundImg-2.png",
    "imgs/backgroundJune28.png",
    "imgs/backgroundJune28.png",
    "imgs/backgroundAugust5.png",
    "imgs/backgroundAugust29.png",
    "imgs/backgroundSeptember13.png",
    "imgs/backgroundTrenchWarfare.png",
    "imgs/backgroundJanuary.png",
    "imgs/backgroundApril1915.png",
    "imgs/backgroundOctober1915.png",
    "imgs/backgroundJuly1916.png",
    "imgs/backgroundDecember1916.png",
    "imgs/backgroundOctober1917.png",
    "imgs/backgroundMarch1918.png",
    "imgs/backgroundNovember1918.png",
    "imgs/backgroundEnd.png"
]

right_Btn.addEventListener('click', ()=>{
    switchStep(Direction.right);
});

left_Btn.addEventListener('click', ()=>{
    switchStep(Direction.left);
});

let current: number = 0;
const stepCircles = document.getElementsByClassName('dot');
const timeDateBox: HTMLElement = document.getElementById('timeDate');
const myDIV: HTMLImageElement = document.getElementById('mydiv') as HTMLImageElement;
let fullImgBox: HTMLElement = document.getElementById('fullImgBox');
let fullImg: HTMLImageElement = document.getElementById('fullImg') as HTMLImageElement;
/*Events*/
let seaBlockade: HTMLAreaElement = document.getElementById('UkBlockade') as HTMLAreaElement;
let event1: HTMLAreaElement = document.getElementById('event1') as HTMLAreaElement;
let event2: HTMLAreaElement = document.getElementById('event2') as HTMLAreaElement;
let event3: HTMLAreaElement = document.getElementById('event3') as HTMLAreaElement;
let event4: HTMLAreaElement = document.getElementById('event4') as HTMLAreaElement;
let event5: HTMLAreaElement = document.getElementById('event5') as HTMLAreaElement;
let event6: HTMLAreaElement = document.getElementById('event6') as HTMLAreaElement;
let event7: HTMLAreaElement = document.getElementById('event7') as HTMLAreaElement;
let battle1: HTMLAreaElement = document.getElementById('battle1') as HTMLAreaElement;
let battle2: HTMLAreaElement = document.getElementById('battle2') as HTMLAreaElement;
let battle3: HTMLAreaElement = document.getElementById('battle3') as HTMLAreaElement;
let battle4: HTMLAreaElement = document.getElementById('battle4') as HTMLAreaElement;
let battle5: HTMLAreaElement = document.getElementById('battle5') as HTMLAreaElement;
let temp;

function jumpToStep(index: number){
    current = index;
    switchStep(Direction.none);
}

function switchStep(direction: Direction){
    /*Default settings*/
    event1.coords = "";
    event2.coords = "";
    event3.coords = "";
    event4.coords = "";
    event5.coords = "";
    event6.coords = "";
    battle1.coords = "";
    battle2.coords = "";
    battle3.coords = "";
    battle4.coords = "";
    battle5.coords = "";
    russia[0] = "Russian Empire";
    russia[1] = "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Russia_%281914-1917%29.svg";
    russia[2] = "Czar"
    russia[3] = "Nicholas II.";
    russia[4] = "const. monarchy";
    russia[7] = "Entente";
    france[6] = "536,464";
    germany[0] = "German Empire";
    germany[1] = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Germany_%281867%E2%80%931918%29.svg";
    germany[2] = "Emperor";
    germany[3] = "Wilhelm II.";
    germany[4] = "const. monarchy";
    germany[5] = "~66,700,0004";
    germany[6] = "540,857";
    germany[7] = "Central Powers";
    italy[6] = "287,624";
    turkey[0] = "Ottoman Empire";
    turkey[1] = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg";
    turkey[2] = "Sultan";
    turkey[3] = "Mehmed V.";
    turkey[4] = "const. monarchy";
    turkey[5] = "24,000,000";
    turkey[6] = "~1,800,000";
    turkey[7] = "neutral";
    giveAreas();

    current += direction;
    if(current < 0){
        current = codeContent.length-1;
    }
    else if(current >= codeContent.length){
        current = 0;
    }

    current > 6? turkey[7] = "Central Powers": turkey[7] = "neutral";
    current > 8? italy[7] = "Entente": italy[7] = "neutral";
    current > 8? bulgaria[7] = "Central Powers": bulgaria[7] = "neutral";

    switch(current) {
        case 1:
            fullImg.src = newspaperSrc[0];
            event1.title = "Assassination of the austrian heir";
            event1.href = "https://en.wikipedia.org/wiki/Assassination_of_Archduke_Franz_Ferdinand";
            event1.coords = event_coords[0];
            break;
        case 2:
            fullImg.src = newspaperSrc[1];
            event1.title = "July Crisis";
            event1.href = "https://en.wikipedia.org/wiki/July_Crisiss";
            event1.coords = event_coords[0];
            break;
        case 3:
            battle1.title = "Battle of Liege";
            battle1.href = "https://en.wikipedia.org/wiki/Battle_of_Liège";
            battle1.coords = event_coords[1];
            break;
        case 4:
            battle1.title = "Battle of Charleroi and Monse";
            battle1.href = "https://en.wikipedia.org/wiki/Battle_of_Charleroi";
            battle1.coords = event_coords[2];
            battle2.title = "Battle of Gumbinnen";
            battle2.href = "https://en.wikipedia.org/wiki/Battle_of_Gumbinnen";
            battle2.coords = event_coords[3];
            battle3.title = "Battle of Tannenberg";
            battle3.href = "https://en.wikipedia.org/wiki/Battle_of_Tannenberg";
            battle3.coords = event_coords[4];
            battle4.title = "Battle of Galicia";
            battle4.href = "https://en.wikipedia.org/wiki/Battle_of_Galicia";
            battle4.coords = event_coords[5];
            battle5.title = "Battle of Cer";
            battle5.href = "https://en.wikipedia.org/wiki/Battle_of_Cer";
            battle5.coords = event_coords[6];
            break;
        case 5:
            battle1.title = "Battle of Marne";
            battle1.href = "https://en.wikipedia.org/wiki/Battle_of_Charleroi";
            battle1.coords = event_coords[8];
            battle2.title = "Siege of Przemysl";
            battle2.href = "https://en.wikipedia.org/wiki/Siege_of_Przemysl";
            battle2.coords = event_coords[7];
            battle3.title = "First Battle of the Masurian Lake";
            battle3.href = "https://en.wikipedia.org/wiki/First_Battle_of_the_Masurian_Lakes";
            battle3.coords = event_coords[9];
            battle4.title = "Battle of Drina";
            battle4.href = "https://en.wikipedia.org/wiki/Battle_of_Drina";
            battle4.coords = event_coords[17];
            break;
        case 6:
            battle1.title = "Battle of Ypres";
            battle1.href = "https://en.wikipedia.org/wiki/First_Battle_of_Ypres";
            battle1.coords = event_coords[10];
            battle2.title = "Siege of Przemysl";
            battle2.href = "https://en.wikipedia.org/wiki/Siege_of_Przemysl";
            battle2.coords = event_coords[11];
            break;
        case 7:
            fullImg.src = newspaperSrc[2];
            battle1.title = "Battle of Bolimow";
            battle1.href = "https://en.wikipedia.org/wiki/Battle_of_Bolimów";
            battle1.coords = event_coords[13];
            battle2.title = "Siege of Przemysl";
            battle2.href = "https://en.wikipedia.org/wiki/Siege_of_Przemysl";
            battle2.coords = event_coords[11];
            battle3.title = "First Battle of Champagne";
            battle3.href = "https://en.wikipedia.org/wiki/First_Battle_of_Champagne";
            battle3.coords = event_coords[12];
            break;
        case 8:
            fullImg.src = newspaperSrc[3];
            battle1.title = "Gorlice–Tarnów offensive";
            battle1.href = "https://en.wikipedia.org/wiki/Gorlice–Tarnów_offensive";
            battle1.coords = event_coords[14];
            battle2.title = "Second Battle of Ypres";
            battle2.href = "https://en.wikipedia.org/wiki/Second_Battle_of_Ypres";
            battle2.coords = event_coords[15];
            battle3.title = "Gallipoli campaign";
            battle3.href = "https://en.wikipedia.org/wiki/Gallipoli_campaign";
            battle3.coords = event_coords[16];
            break;
        case 9:
            fullImg.src = newspaperSrc[4];
            battle1.title = "Battle of Morava";
            battle1.href = "https://en.wikipedia.org/wiki/Battle_of_Morava";
            battle1.coords = event_coords[18];
            battle2.title = "Battles of the Isonzo";
            battle2.href = "https://en.wikipedia.org/wiki/Battles_of_the_Isonzo";
            battle2.coords = event_coords[19];
            battle3.title = "Battle of Loos";
            battle3.href = "https://en.wikipedia.org/wiki/Battle_of_Loos";
            battle3.coords = event_coords[20];
            battle4.title = "Great Retreat of 1915";
            battle4.href = "https://en.wikipedia.org/wiki/Great_Retreat_(Russian)";
            battle4.coords = event_coords[21];
            break;
        case 10:
            battle1.title = "Brusilov Offensivea";
            battle1.href = "https://en.wikipedia.org/wiki/Brusilov_Offensive";
            battle1.coords = event_coords[22];
            battle2.title = "Battles of the Isonzo";
            battle2.href = "https://en.wikipedia.org/wiki/Battles_of_the_Isonzo";
            battle2.coords = event_coords[19];
            battle3.title = "Battle of Verdun";
            battle3.href = "https://en.wikipedia.org/wiki/Battle_of_Verdun";
            battle3.coords = event_coords[23];
            battle4.title = "Battle of the Somme";
            battle4.href = "https://en.wikipedia.org/wiki/Battle_of_the_Somme";
            battle4.coords = event_coords[24];
            battle5.title = "Battle of Jutland";
            battle5.href = "https://en.wikipedia.org/wiki/Battle_of_Jutland";
            battle5.coords = event_coords[25];
            break;
        case 11:
            fullImg.src = newspaperSrc[5];
            battle1.title = "Battles of the Isonzo";
            battle1.href = "https://en.wikipedia.org/wiki/Battles_of_the_Isonzo";
            battle1.coords = event_coords[19];
            break;
        case 12:
            russia[0] = "Russian Republic";
            russia[1] = "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Russia_%281914-1917%29.svg";
            russia[2] = "Leader"
            russia[3] = "Georgy Lvov";
            russia[4] = "prov. Government"
            russia[7] = "Entente";
            germany[4] = "mili. dictatorship";
            battle1.title = "Battle of Caporetto";
            battle1.href = "https://en.wikipedia.org/wiki/Battle_of_Caporetto";
            battle1.coords = event_coords[19];
            battle2.title = "Third Battle of Ypres";
            battle2.href = "https://en.wikipedia.org/wiki/Third_Battle_of_Ypres";
            battle2.coords = event_coords[27];
            event1.title = "February Revolution";
            event1.href = "https://en.wikipedia.org/wiki/February_Revolution";
            event1.coords = event_coords[28];
            event2.title = "February Revolution";
            event2.href = "https://en.wikipedia.org/wiki/February_Revolution";
            event2.coords = event_coords[29];
            event3.title = "February Revolution";
            event3.href = "https://en.wikipedia.org/wiki/February_Revolution";
            event3.coords = event_coords[30];
            event4.title = "February Revolution";
            event4.href = "https://en.wikipedia.org/wiki/February_Revolution";
            event4.coords = event_coords[31];
            event5.title = "February Revolution";
            event5.href = "https://en.wikipedia.org/wiki/February_Revolution";
            event5.coords = event_coords[32];
            event6.title = "February Revolution";
            event6.href = "https://en.wikipedia.org/wiki/February_Revolution";
            event6.coords = event_coords[33];
            break;
        case 13:
            russia[0] = "Russian Socialist Republic";
            russia[1] = "https://upload.wikimedia.org/wikipedia/commons/e/e5/Flag_of_the_Russian_Soviet_Federative_Socialist_Republic_%281918%E2%80%931925%29.svg";
            russia[2] = "Leader"
            russia[3] = "Wladimir Lenin";
            russia[4] = "one-party state"
            russia[7] = "neutral";
            germany[4] = "mili. dictatorship";
            battle1.title = "Second Battle of Marne";
            battle1.href = "https://en.wikipedia.org/wiki/Second_Battle_of_Marne";
            battle1.coords = event_coords[34];
            russiaArea.coords = "3320,1355,3276,1352,3229,1343,3194,1340,3153,1331,3153,1308,3200,1290,3188,1267,3191,1240,3223," +
                "1214,3167,1196,3165,1179,3188,1170,3211,1140,3235,1126,3223,1085,3179,1052,3217,1044,3241,1014,3238,991,3253,967,3241,944,3129,944," +
                "3115,920,3000,917,2977,900,2994,847,2968,829,2906,824,2871,832,2853,850,2789,844,2765,853,2742,826,2721,774,2666,756,2633,741,2613,697," +
                "2601,642,2592,612,2560,568,2531,521,2513,498,2481,469,2437,451,2419,413,2399,369,2378,351,2349,357,2325,360,2328,339,2343,331,2357,290," +
                "2325,278,2313,257,2334,237,2355,237,2366,222,2396,216,2407,196,2446,178,2475,140,2484,87,2507,40,2528,5,3320,-1";
            break;
        case 14:
            russia[0] = "Russian Socialist Republic";
            russia[1] = "https://upload.wikimedia.org/wikipedia/commons/e/e5/Flag_of_the_Russian_Soviet_Federative_Socialist_Republic_%281918%E2%80%931925%29.svg";
            russia[2] = "Leader"
            russia[3] = "Wladimir Lenin";
            russia[4] = "one-party state"
            russia[7] = "neutral";
            germany[4] = "mili. dictatorship";
            fullImg.src = newspaperSrc[6];
            event1.title = "November Revolution";
            event1.href = "https://en.wikipedia.org/wiki/German_Revolution_of_1918–1919";
            event1.coords = event_coords[35];
            event2.title = "November Revolution";
            event2.href = "https://en.wikipedia.org/wiki/German_Revolution_of_1918-1919";
            event2.coords = event_coords[36];
            event3.title = "November Revolution";
            event3.href = "https://en.wikipedia.org/wiki/German_Revolution_of_1918-1919";
            event3.coords = event_coords[37];
            event4.title = "November Revolution";
            event4.href = "https://en.wikipedia.org/wiki/German_Revolution_of_1918-1919";
            event4.coords = event_coords[38];
            battle1.title = "Armistice of Villa Giusti";
            battle1.href = "https://en.wikipedia.org/wiki/Armistice_of_Villa_Giusti";
            battle1.coords = event_coords[39];
            battle2.title = "Armistice of Salonica";
            battle2.href = "https://en.wikipedia.org/wiki/Armistice_of_Salonica";
            battle2.coords = event_coords[40];
            battle3.title = "Armistice of Mudros";
            battle3.href = "https://en.wikipedia.org/wiki/Armistice_of_Mudros";
            battle3.coords = event_coords[41];
            russiaArea.coords = "3320,1355,3276,1352,3229,1343,3194,1340,3153,1331,3153,1308,3200,1290,3188,1267,3191,1240,3223," +
                "1214,3167,1196,3165,1179,3188,1170,3211,1140,3235,1126,3223,1085,3179,1052,3217,1044,3241,1014,3238,991,3253,967,3241,944,3129,944," +
                "3115,920,3000,917,2977,900,2994,847,2968,829,2906,824,2871,832,2853,850,2789,844,2765,853,2742,826,2721,774,2666,756,2633,741,2613,697," +
                "2601,642,2592,612,2560,568,2531,521,2513,498,2481,469,2437,451,2419,413,2399,369,2378,351,2349,357,2325,360,2328,339,2343,331,2357,290," +
                "2325,278,2313,257,2334,237,2355,237,2366,222,2396,216,2407,196,2446,178,2475,140,2484,87,2507,40,2528,5,3320,-1";
            break;
        case 15:
            russia[0] = "Russian Socialist Republic";
            russia[1] = "https://upload.wikimedia.org/wikipedia/commons/e/e5/Flag_of_the_Russian_Soviet_Federative_Socialist_Republic_%281918%E2%80%931925%29.svg";
            russia[2] = "Leader"
            russia[3] = "Wladimir Lenin";
            russia[4] = "one-party state"
            russia[7] = "neutral";
            serbiaArea.coords = "";
            turkey[0] = "Republic of Turkey";
            turkey[1] = "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg";
            turkey[2] = "President";
            turkey[3] = "Mustafa Kemal";
            turkey[4] = "const. republic";
            turkey[5] = "14,400,000";
            turkey[6] = "783,356";
            turkey[7] = "none";
            kukArea.coords = "";
            france[6] = "550,960";
            franceArea.coords = "1084,1843,1081,1802,1107,1775,1154,1761,1213,1778,1239,1793,1275,1805," +
                "1310,1796,1363,1758,1374,1722,1336,1711,1327,1678,1339,1664,1316,1628,1333,1623,1351,1617,1330," +
                "1573,1342,1564,1333,1540,1330,1514,1307,1517,1304,1535,1280,1540,1292,1505,1313,1470,1327,1461,1345," +
                "1432,1363,1420,1386,1420,1389,1376,1398,1335,1415,1303,1369,1279,1327,1247,1295,1247,1263,1235,1234,1206," +
                "1210,1206,1204,1174,1169,1159,1154,1136,1122,1124,1116,1094,1060,1100,1063,1147,1040,1174,1008,1185,975," +
                "1194,969,1224,946,1224,917,1215,893,1206,893,1188,855,1182,870,1224,867,1268,829,1268,776,1247,702,1247," +
                "676,1259,685,1300,711,1329,764,1341,793,1397,811,1441,849,1491,846,1549,793,1722,826,1761,852,1781,887,1793," +
                "914,1802,928,1793,952,1805,969,1816,1002,1837,1034,1846,1057,1843";
            germany[0] = "Weimar Republic";
            germany[1] = "https://upload.wikimedia.org/wikipedia/commons/8/86/Flag_of_Germany_%283-2_aspect_ratio%29.svg";
            germany[2] = "President";
            germany[3] = "Friedrich Ebert";
            germany[4] = "federal republic";
            germany[5] = "60,898,584";
            germany[6] = "468,718";
            germany[7] = "none";
            germanyArea.coords = "1709,1428,1697,1387,1729,1363,1732,1340,1750,1349,1747,1319,1712,1287,1688,1249,1665,1190," +
                "1703,1167,1756,1143,1791,1126,1832,1132,1888,1155,1903,1202,1926,1193,1914,1170,1944,1182,1964,1173,1997,1190," +
                "2011,1152,1999,1105,1932,1058,1859,1020,1832,991,1844,956,1879,926,1900,891,1920,868,1903,844,1938,759,1862,785," +
                "1862,803,1762,844,1718,832,1715,803,1691,791,1674,809,1633,835,1577,850,1594,826,1539,815,1530,788,1451,774,1471,856," +
                "1445,885,1424,870,1380,885,1363,900,1383,917,1377,950,1374,979,1366,1008,1354,1035,1322,1038,1322,1058,1316,1093,1316," +
                "1129,1327,1161,1319,1190,1322,1208,1336,1237,1336,1255,1369,1275,1415,1296,1401,1343,1392,1393,1386,1413,1415,1413,1436," +
                "1402,1474,1399,1504,1413,1512,1434,1539,1434,1556,1443,1565,1425,1592,1425,1597,1440,1633,1425,1665,1410,1683,1422";
            easternPrussiaArea.coords = "2014,783,2005,816,1991,842,2014,860,2043,854,2067,874,2099,866,2137,842,2167,830,2190,813,2173," +
                "786,2176,766,2173,719,2149,713,2123,716,2085,698,2067,719,2029,731,2032,757";
            italy[6] = "310,190";
            italyArea.coords = "1694,2279,1700,2247,1762,2241,1815,2247,1867,2244,1914,2223,1944,2176,1944,2129,1911,2068,1862,2035,1803," +
                "1983,1732,1956,1633,1894,1571,1830,1553,1768,1533,1733,1451,1695,1427,1713,1395,1745,1371,1745,1380,1724,1345,1713,1327," +
                "1683,1339,1663,1313,1636,1345,1616,1339,1586,1345,1566,1374,1560,1389,1563,1410,1548,1427,1516,1433,1542,1457,1542,1468,1575," +
                "1474,1548,1483,1513,1501,1522,1521,1525,1539,1537,1530,1504,1550,1513,1556,1478,1586,1490,1597,1472,1650,1460,1665,1478,1700,1498," +
                "1753,1507,1803,1595,1782,1648,1753,1613,1753,1583,1709,1592,1668,1610,1688,1648,1674,1677,1691,1724,1738,1762,1759,1780,1785,1830," +
                "1815,1877,1862,1900,1923,1894,1932,1912,1908,1933,1955,1947,2032,1983,2093,2012,2111,2047,2090,2065,2052,2038,2014,2018,1985,2035," +
                "1973,2076,2002,2106,2032,2143,1997,2161,1991,2199,1976,2225,1955,2251,1917,2237,1894,2272,1914,2337,1882,2352,1820,2329";
            russiaArea.coords = "3320,1357,3270,1351,3206,1342,3147,1327,3147,1301,3203,1280,3188,1277,3194,1233,3200,1213,3226,1213,3162,1186," +
                "3185,1169,3235,1113,3214,1093,3200,1116,3150,1145,3123,1178,3100,1198,3071,1216,3044,1251,3027,1286,2983,1298,2944,1304,2900,1330,2818," +
                "1336,2859,1301,2806,1304,2774,1321,2768,1365,2713,1345,2666,1304,2630,1251,2578,1227,2542,1210,2525,1210,2487,1225,2466,1219,2425,1093," +
                "2451,1057,2478,1046,2469,963,2481,952,2460,937,2451,870,2407,840,2396,729,2407,711,2407,676,2428,644,2428,614,2390,582,2404,551,2393,521," +
                "2372,492,2349,445,2343,413,2319,369,2316,336,2325,292,2325,269,2316,251,2349,228,2366,222,2407,216,2378,193,2381,163,2396,160,2443,46,2419," +
                "43,2416,20,2431,17,2431,5,3003,2,3320,5,3317,246";
            break;
    }

    const contentBox: HTMLElement = document.getElementById('stepContentID')
    const step: HTMLElement = stepCircles[current] as HTMLElement;
    timeDateBox.innerText = timeText[current];
    myDIV.src = imgContentList[current];
    contentBox.innerHTML = codeContent[current];
    changeStepCircle(step);
}

let container: HTMLElement = document.createElement('p') as HTMLElement;
container.id = "DateOverStep";

function changeStepCircle(step: HTMLElement){
    if(temp != undefined){
        container.innerText = "";
        temp.style.height = "20px";
        temp.style.width = "20px";
    }
    step.style.height = "30px";
    step.style.width = "30px";
    container.innerText = timeText[current];
    step.before(container);
    temp = step;
}
function removeFullImgBox(){
    fullImgBox.style.display = "none";
}

function showFullImgBox(){
    fullImgBox.style.display = "flex";
}

document.addEventListener('DOMContentLoaded', ()=>{
    switchStep(Direction.none)
})