export type ArbitraryValueSyntax = 'bracket' | 'curly' | 'paren';

export type ArbitraryParseResult = {
  prefix: string;
  value: string;
  syntax: ArbitraryValueSyntax;
};

