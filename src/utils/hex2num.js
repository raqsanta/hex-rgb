
export default function getNumber(value, secondValue) {

    return (parseInt(value, 16) + (parseInt(secondValue, 16) / 16)) * 16

}

console.log('RGB: ' + getNumber('D','C') + ',' + getNumber('1','4') + ',' + getNumber('3','C'))
