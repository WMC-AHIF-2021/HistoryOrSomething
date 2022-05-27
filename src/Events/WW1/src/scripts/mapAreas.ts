const areas: string[] = [
    "1705,1434,1705,1408,1693,1381,1734,1361,1731,1346,1755,1349,1752,1329,1728,1302,1717,1282," +
    "1690,1264,1679,1241,1684,1223,1658,1182,1702,1170,1734,1153,1781,1135,1775,1123,1802,1118,1808," +
    "1141,1834,1123,1896,1153,1881,1170,1910,1200,1937,1188,1934,1179,1957,1179,1975,1173,1998,1191,2051," +
    "1182,2074,1153,2139,1167,2168,1141,2198,1129,2221,1100,2256,1115,2247,1132,2291,1132,2321,1118,2353,1100," +
    "2379,1112,2409,1123,2432,1150,2447,1164,2488,1170,2491,1200,2494,1226,2500,1247,2511,1264,2485,1267,2506,1293," +
    "2509,1317,2520,1358,2494,1376,2462,1402,2503,1414,2532,1446,2547,1467,2553,1511,2532,1534,2488,1534,2444," +
    "1543,2403,1557,2379,1569,2338,1587,2315,1610,2280,1619,2242,1645,2192,1660,2157,1648,2157,1689,2168,1722,2162," +
    "1739,2154,1766,2127,1760,2107,1769,2095,1810,2110,1865,2063,1845,2013,1827,1975,1816,1928,1792,1881,1769," +
    "1843,1739,1813,1704,1787,1657,1764,1663,1746,1628,1740,1587,1746,1560,1743,1528,1714,1511,1679,1505,1646,1513," +
    "1635,1537,1608,1557,1564,1566,1547,1552,1552,1519,1555,1487,1555,1467,1535,1481,1517,1464,1505,1437,1529,1434,1549," +
    "1446,1558,1425,1582,1428,1596,1440,1614,1428,1655,1420,1679,1420",
    "1711,1432,1696,1382,1740,1356,1737,1338,1755,1344,1755,1321,1726,1286,1690,1262,1684,1242,1693,1230,1684,1242," +
    "1658,1183,1690,1171,1723,1160,1761,1145,1784,1118,1808,1121,1825,1121,1857,1139,1881,1145,1899,1151,1899,1174,1919," +
    "1198,1931,1186,1931,1171,1957,1180,1969,1165,2010,1183,2045,1186,2063,1162,2045,1113,2031,1066,2010,1025,2004,992,2016," +
    "948,2039,910,2089,896,2142,863,2162,837,2157,793,2157,758,2142,725,2113,714,2095,690,2075,664,2077,693,2057,725,2033,734," +
    "2025,769,1989,787,1966,787,1948,764,1907,764,1881,781,1860,799,1840,816,1761,855,1731,846,1726,816,1708,793,1676,811," +
    "1646,822,1626,840,1596,857,1573,852,1588,831,1591,811,1555,825,1532,816,1523,787,1514,758,1503,743,1462,746,1444,775,1456," +
    "802,1467,831,1473,860,1453,869,1415,875,1362,887,1379,907,1385,934,1376,957,1368,981,1374,1004,1356,1028,1338,1042,1312,1045" +
    ",1327,1074,1321,1098,1312,1124,1318,1148,1332,1168,1315,1192,1330,1209,1332,1230,1321,1245,1324,1280,1347,1300,1368,1309,1376," +
    "1336,1368,1368,1362,1394,1362,1421,1391,1418,1423,1418,1444,1403,1470,1409,1494,1412,1508,1432,1526,1432,1544,1441,1561,1424," +
    "1591,1426,1602,1438,1635,1426,1661,1421,1690,1418",
    "3318,1353,3268,1350,3227,1344,3177,1333,3148,1321,3163,1297,3192,1286,3189,1250,3192,1224,3166,1189,3189,1154,3221," +
    "1104,3174,1133,3133,1162,3095,1195,3060,1221,3034,1262,2998,1289,2951,1309,2910,1328,2866,1342,2819,1334,2858,1300,2822," +
    "1306,2784,1312,2761,1344,2755,1388,2740,1438,2740,1476,2717,1479,2705,1517,2687,1500,2664,1509,2635,1494,2626,1450,2623," +
    "1391,2597,1365,2570,1327,2547,1294,2517,1303,2503,1281,2503,1224,2488,1168,2459,1160,2429,1118,2391,1105,2347,1093,2306," +
    "1119,2265,1122,2218,1092,2206,1113,2180,1127,2151,1145,2116,1151,2077,1145,2054,1130,2022,1086,2010,1033,2001,978,2025,940," +
    "2057,907,2104,887,2160,855,2165,816,2162,764,2154,731,2124,714,2098,699,2072,664,2060,617,2060,564,2066,517,2101,482,2133,500," +
    "2171,532,2201,517,2195,476,2189,409,2165,420,2136,388,2130,353,2148,324,2195,300,2259,288,2294,288,2321,256,2362,221,2406,212," +
    "2374,195,2341,198,2318,165,2289,183,2239,206,2206,230,2168,253,2130,277,2104,283,2054,259,2022,227,2007,183,2001,148,1984,95," +
    "1972,68,2001,-2,3318,1",
    "1885,2356,1903,2333,1894,2297,1903,2253,1911,2230,1929,2250,1955,2236,1973,2209,1991,2198,1979,2168,2026,2145,2014,2110," +
    "1997,2092,1976,2089,1979,2057,2002,2016,2020,2033,2049,2028,2067,2054,2096,2069,2108,2036,2082,2013,2055,1992,2020,1975," +
    "1994,1963,1923,1934,1941,1907,1926,1893,1856,1898,1815,1866,1794,1846,1756,1758,1691,1722,1674,1670,1688,1658,1668,1611,1724," +
    "1582,1747,1576,1744,1555,1762,1552,1744,1526,1718,1517,1683,1505,1647,1520,1644,1543,1615,1555,1577,1570,1550,1564,1545,1543," +
    "1556,1529,1536,1523,1504,1526,1486,1514,1474,1552,1468,1573,1442,1543,1433,1517,1401,1555,1348,1558,1333,1576,1351,1596,1348,1626," +
    "1319,1628,1339,1652,1330,1678,1342,1711,1374,1716,1369,1749,1398,1746,1415,1719,1439,1699,1474,1711,1515,1728,1542,1761,1562,1807," +
    "1580,1843,1624,1875,1650,1901,1683,1942,1732,1963,1785,1981,1815,2004,1844,2019,1876,2063,1914,2069,1935,2110,1947,2151,1932,2195," +
    "1888,2221,1835,2239,1765,2233,1721,2242,1700,2265,1718,2292,1759,2300,1794,2321,1832,2333,1850,2353",
    "1498,2158,1471,2149,1462,2172,1433,2184,1421,2155,1418,2105,1418,2078,1415,2031,1401,2043,1407,1996,1421,2008,1451,1993," +
    "1474,1973,1506,1984,1515,2020,1518,2040,1509,2105,1504,2131",
    "2243,1944,2275,1947,2308,1933,2319,1912,2355,1912,2378,1883,2378,1859,2369,1836,2349,1827,2334,1809,2331,1765,2346," +
    "1760,2331,1765,2357,1739,2343,1718,2313,1677,2322,1645,2319,1616,2281,1616,2193,1654,2161,1645,2158,1677,2173,1701,2167," +
    "1739,2161,1771,2173,1789,2196,1827,2217,1842,2225,1889,2225,1918",
    "2589,1894,2607,1877,2595,1853,2613,1839,2610,1821,2589,1812,2607,1786,2636,1762,2666,1771,2695,1760,2677,1736,2654,1733,2677," +
    "1704,2674,1660,2572,1636,2563,1619,2542,1627,2513,1660,2457,1660,2440,1671,2375,1666,2360,1677,2340,1671,2349,1654,2322,1642," +
    "2313,1671,2331,1710,2360,1730,2349,1754,2331,1765,2343,1798,2334,1812,2366,1830,2381,1859,2378,1886,2410,1871,2448,1865,2484,1862," +
    "2507,1883,2510,1900",
    "3320,1638,3288,1653,3270,1635,3241,1650,3217,1629,3194,1621,3165,1644,3147,1635,3141,1615,3123,1618," +
    "3118,1632,3021,1656,3000,1679,2968,1709,2924,1756,2924,1776,2895,1788,2859,1785,2789,1808,2742,1803,2710,1788," +
    "2695,1759,2666,1770,2642,1761,2613,1782,2598,1811,2619,1832,2598,1855,2604,1873,2592,1896,2607,1908,2636,1902," +
    "2610,1926,2622,1952,2645,1905,2674,1885,2683,1855,2713,1855,2739,1844,2777,1838,2792,1852,2768,1873,2792,1879,2721," +
    "1899,2701,1891,2639,1920,2607,1967,2619,2005,2666,1990,2654,2014,2671,2034,2648,2055,2648,2093,2654,2114,2718,2119,2716," +
    "2143,2730,2202,2762,2222,2798,2222,2839,2207,2877,2219,2918,2237,2968,2207,2977,2184,2968,2152,3021,2146,3079,2155,3129," +
    "2187,3179,2161,3220,2125,3235,2084,3264,2067,3297,2072,3320,2058",
    "1087,1844,1052,1850,1013,1847,999,1823,978,1817,934,1788,922,1803,881,1803,875,1782,852,1785,840,1767,811," +
    "1759,808,1738,782,1726,799,1709,843,1550,852,1486,826,1465,802,1427,817,1409,787,1383,799,1362,770,1362,735," +
    "1333,714,1318,688,1321,670,1289,691,1286,696,1271,673,1266,679,1245,708,1242,764,1239,785,1245,799,1274,817,1260," +
    "864,1271,861,1245,858,1204,858,1175,893,1186,893,1213,952,1227,969,1216,969,1195,1060,1169,1055,1145,1063,1101,1110," +
    "1090,1125,1128,1145,1122,1151,1145,1172,1148,1169,1169,1198,1163,1198,1198,1222,1198,1269,1242,1292,1248,1316,1251,1319," +
    "1277,1333,1286,1336,1301,1374,1315,1366,1342,1363,1368,1366,1424,1345,1433,1327,1462,1301,1492,1283,1533,1301,1533,1310," +
    "1515,1327,1515,1333,1544,1342,1559,1327,1574,1351,1603,1339,1629,1319,1635,1339,1656,1333,1679,1345,1715,1374,1720,1371," +
    "1744,1345,1767,1316,1794,1280,1808,1231,1785,1181,1770,1145,1761,1104,1779,1087,1808",
    "1603,2491,1603,2459,1571,2432,1559,2406,1586,2391,1606,2359,1603,2339,1562,2362,1545,2339,1550,2330,1515," +
    "2303,1474,2327,1439,2344,1404,2339,1339,2327,1278,2330,1222,2353,1192,2362,1169,2341,1128,2336,1084,2336," +
    "1034,2333,1002,2350,975,2350,922,2347,887,2347,834,2368,805,2394,785,2383,755,2383,720,2403,696,2429,658," +
    "2435,638,2424,617,2438,594,2432,567,2462,559,2441,532,2456,512,2441,397,2415,397,2397,356,2383,338,2415,312," +
    "2453,256,2473,154,2491",
    "1474,1960,1486,1965,1498,1906,1504,1862,1492,1812,1477,1842,1454,1851,1436,1884,1439,1916,1451,1951",
    "658,1100,682,1118,714,1089,773,1115,787,1083,823,1074,834,1094,875,1092,905,1106,928,1089,964,1089,996," +
    "1100,1034,1089,1060,1071,1066,1053,1025,1045,1055,1018,1087,983,1096,945,1081,918,1037,910,1028,930," +
    "1010,904,1028,895,1025,874,1016,813,1002,781,969,754,958,672,940,643,911,619,887,613,917,602,911,581,931," +
    "575,949,549,978,502,969,481,911,472,881,472,890,446,934,414,946,384,969,355,969,326,943,323,934,349,911,379," +
    "875,379,849,373,820,379,785,367,752,381,729,420,714,469,723,496,746,537,720,604,749,648,776,690,782,719,823,719," +
    "867,701,840,736,852,778,875,778,846,851,779,825,787,860,758,877,767,892,790,874,793,901,776,933,717,939,723,977," +
    "755,974,764,989,787,986,805,1018,855,1001,820,1030,758,1024,738,1030,729,1053,691,1083,676,1089",
    "658,915,696,848,696,769,746,742,746,707,735,654,691,646,673,625,600,637,582,666,617,692,588,701,517,684,517," +
    "725,488,760,512,789,541,789,512,795,506,819,447,851,444,892,447,913,471,930,503,936,564,930,600,907",
    "1841,2426,1856,2411,1844,2390,1820,2399,1820,2417",
    "1049,298,1081,210,1040,228,1034,251",
    "785,777,802,762,808,741,785,753",
    "2795,2297,2812,2277,2824,2242,2801,2250,2789,2268",
    "2748,2350,2771,2333,2765,2297,2751,2327",
    "2730,2239,2754,2209,2733,2209,2704,2192",
    "3138,1301,3138,1339,3112,1357,3088,1357,3079,1377,3053,1398,3035,1415,3024,1453,2971,1450,2977,1404,2944,1398," +
    "2924,1389,2906,1404,2900,1389,2918,1354,2953,1330,2971,1310,3003,1310,3032,1321,3065,1333,3088,1336,3106,1315"
]
const kukArea: HTMLAreaElement = document.getElementById('kukArea') as HTMLAreaElement;
const germanyArea: HTMLAreaElement = document.getElementById('germanyArea') as HTMLAreaElement;
const russiaArea: HTMLAreaElement = document.getElementById('russiaArea') as HTMLAreaElement;
const italyArea: HTMLAreaElement = document.getElementById('italyArea') as HTMLAreaElement;
const sardiniaArea: HTMLAreaElement = document.getElementById('sardiniaArea') as HTMLAreaElement;
const serbiaArea: HTMLAreaElement = document.getElementById('serbiaArea') as HTMLAreaElement;
const bulgariaArea: HTMLAreaElement = document.getElementById('bulgariaArea') as HTMLAreaElement;
const turkeyArea: HTMLAreaElement = document.getElementById('turkeyArea') as HTMLAreaElement;
const franceArea: HTMLAreaElement = document.getElementById('franceArea') as HTMLAreaElement;
const algeriaArea: HTMLAreaElement = document.getElementById('algeriaArea') as HTMLAreaElement;
const corsicaArea: HTMLAreaElement = document.getElementById('corsicaArea') as HTMLAreaElement;
const ukArea: HTMLAreaElement = document.getElementById('ukArea') as HTMLAreaElement;
const irelandArea: HTMLAreaElement = document.getElementById('irelandArea') as HTMLAreaElement;
const maltaArea: HTMLAreaElement = document.getElementById('maltaArea') as HTMLAreaElement;
const shetlandArea: HTMLAreaElement = document.getElementById('shetlandArea') as HTMLAreaElement;
const isleOfManArea: HTMLAreaElement = document.getElementById('isleOfManArea') as HTMLAreaElement;
const rhodosArea: HTMLAreaElement = document.getElementById('rhodosArea') as HTMLAreaElement;
const italianGreece1Area: HTMLAreaElement = document.getElementById('italianGreece1Area') as HTMLAreaElement
const italianGreece2Area: HTMLAreaElement = document.getElementById('italianGreece2Area') as HTMLAreaElement;
const crimeaArea: HTMLAreaElement = document.getElementById('crimeaArea') as HTMLAreaElement;

const countryAreas: HTMLAreaElement[] = [
    kukArea,
    germanyArea,
    russiaArea,
    italyArea,
    sardiniaArea,
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
    rhodosArea,
    italianGreece1Area,
    italianGreece2Area,
    crimeaArea
]

function giveAreas(){
    for(let x: number = 0; x <countryAreas.length; x++){
        countryAreas[x].coords = areas[x];
    }
}

addEventListener('DOMContentLoaded', ()=>{
    giveAreas();
})