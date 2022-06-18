import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";
import { RecognitionException, Recognizer } from "antlr4ts";

export class ErrorListener implements ANTLRErrorListener<any> {
  errors = [];

  syntaxError<T>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined
  ): void {
    this.errors.push({
      line,
      charPositionInLine,
      msg,
      offendingSymbol,
    });
  }
}
