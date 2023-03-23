<template>
    <div>
        <div class="title">
            <h1>RGBA to HEX Converter</h1>
        </div>
        <div class="color-inputs">
            <label for="red">R</label>
            <input class="color-input" v-model="red" type="number" name="red" id="red" min="0" max="255">
            <label for="green">G</label>
            <input class="color-input" v-model="green" type="number" name="green" id="green" min="0" max="255">
            <label for="blue">B</label>
            <input class="color-input" v-model="blue" type="number" name="blue" id="blue" min="0" max="255">
            <label for="alpha">A</label>
            <input class="color-input" v-model="alpha" type="number" name="alpha" id="alpha" step="0.01" min="0" max="1">
        </div>
        <h1> {{ hexColor(red, blue, green, alpha) }} </h1>
        <div class="box" :style="'background: ' + hexColor(red, blue, green, alpha)">
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            red: 100,
            green: 155,
            blue: 200,
            alpha: 0.85
        }
    },
    methods: {
        hexColor(red, blue, green, alpha) {
            let hex = "#";
            let hex1 = Math.floor(red / 16);
            let hex2 = red % 16;
            let hex3 = Math.floor(green / 16);
            let hex4 = green % 16;
            let hex5 = Math.floor(blue / 16);
            let hex6 = blue % 16;
            alpha = alpha <= 1 ? alpha * 100 : alpha;

            const mapColors = {
                0: '0',
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                10: 'a',
                11: 'b',
                12: 'c',
                13: 'd',
                14: 'e',
                15: 'f'
            }

            const mapAlpha = {
                '0': '00',
                '1': '03',
                '2': '05',
                '3': '08',
                '4': '0A',
                '5': '0D',
                '6': '0F',
                '7': '12',
                '8': '14',
                '9': '17',
                '10': '1A',
                '11': '1C',
                '12': '1F',
                '13': '21',
                '14': '24',
                '15': '26',
                '16': '29',
                '17': '2B',
                '18': '2E',
                '19': '30',
                '20': '33',
                '21': '36',
                '22': '38',
                '23': '3B',
                '24': '3D',
                '25': '40',
                '26': '42',
                '27': '45',
                '28': '47',
                '29': '4A',
                '30': '4D',
                '31': '4F',
                '32': '52',
                '33': '54',
                '34': '57',
                '35': '59',
                '36': '5C',
                '37': '5E',
                '38': '61',
                '39': '63',
                '40': '66',
                '41': '69',
                '42': '6B',
                '43': '6E',
                '44': '70',
                '45': '73',
                '46': '75',
                '47': '78',
                '48': '7A',
                '49': '7D',
                '50': '80',
                '51': '82',
                '52': '85',
                '53': '87',
                '54': '8A',
                '55': '8C',
                '56': '8F',
                '57': '91',
                '58': '94',
                '59': '96',
                '60': '99',
                '61': '9C',
                '62': '9E',
                '63': 'A1',
                '64': 'A3',
                '65': 'A6',
                '66': 'A8',
                '67': 'AB',
                '68': 'AD',
                '69': 'B0',
                '70': 'B3',
                '71': 'B5',
                '72': 'B8',
                '73': 'BA',
                '74': 'BD',
                '75': 'BF',
                '76': 'C2',
                '77': 'C4',
                '78': 'C7',
                '79': 'C9',
                '80': 'CC',
                '81': 'CF',
                '82': 'D1',
                '83': 'D4',
                '84': 'D6',
                '85': 'D9',
                '86': 'DB',
                '87': 'DE',
                '88': 'E0',
                '89': 'E3',
                '90': 'E6',
                '91': 'E8',
                '92': 'EB',
                '93': 'ED',
                '94': 'F0',
                '95': 'F2',
                '96': 'F5',
                '97': 'F7',
                '98': 'FA',
                '99': 'FC',
                '100': ''
            }

            hex += mapColors[hex1] + mapColors[hex2] + mapColors[hex3] + mapColors[hex4] + mapColors[hex5] + mapColors[hex6] + mapAlpha[alpha]

            return hex;
        }
    }
}
</script>

<style>
.box {
    width: 150px;
    height: 150px;
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(0, 0, 0, 0.148);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.142);
}

.color-input {
    width: 100px;
    height: 50px;
    font-size: 24px;
    padding-left: 10px;
    padding-right: 5px;
    margin: 50px 0;
}

.color-inputs {
    display: flex;
    align-items: center;
    justify-content: center;
}

label {
    margin: 0 20px;
}
</style>