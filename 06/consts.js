
// map of ALU command to binarry code
const ALU_TO_BIN = new Map([
    ['0', '0101010'],
    ['1', '0111111'],
    ['-1', '0111010'],
    ['D', '0001100'],
    ['A', '0110000'],
    ['!D', '0001101'],
    ['!A', '0110001'],
    ['-D', '0001111'],
    ['-A', '0110011'],
    ['D+1', '0011111'],
    ['A+1', '0110111'],
    ['D-1', '0001110'],
    ['A-1', '0110010'],
    ['D+A', '0000010'],
    ['D-A', '0010011'],
    ['A-D', '0000111'],
    ['D&A', '0000000'],
    ['D|A', '0010101'],
    ['M', '1110000'],
    ['!M', '1110001'],
    ['-M', '1110011'],
    ['M+1', '1110111'],
    ['M-1', '1110010'],
    ['D+M', '1000010'],
    ['D-M', '1010011'],
    ['M-D', '1000111'],
    ['D&M', '1000000'],
    ['D|M', '1010101']
]);

// jump command to binary code
const JMP_TO_BIN = new Map([
    ['', '000'],
    ['JGT', '001'],
    ['JEQ', '010'],
    ['JGE', '011'],
    ['JLT', '100'],
    ['JNE', '101'],
    ['JLE', '110'],
    ['JMP', '111'],
]);

const BASIC_SYMBOLS = [
    ['SP', 0],
    ['LCL', 1],
    ['ARG', 2],
    ['THIS', 3],
    ['THAT', 4],
    ['SCREEN', 16384],
    ['KBD', 24576]
];

module.exports = {
    ALU_TO_BIN: ALU_TO_BIN,
    JMP_TO_BIN: JMP_TO_BIN,
    BASIC_SYMBOLS: BASIC_SYMBOLS
};