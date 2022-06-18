export interface Scope<NodeT, ContextT> {
  name: string;
  context?: ContextT;
  entries: { [id: string]: NodeT };
}

export class ScopeStack<NodeT, ContextT> {
  scopes: Scope<NodeT, ContextT>[];
  constructor() {
    this.scopes = [];
    this.reset();
  }
  reset() {
    this.scopes.length = 0;
    this.enterScope("topLevel");
  }
  enterScope(name: string = "noname", context?: ContextT) {
    this.scopes.push({ name, context, entries: {} });
    return this.scopes[this.scopes.length-1]
  }
  currentStack() {
    return this.scopes.slice().reverse();
  }
  disposeScope() {
    return this.scopes.pop();
  }
  top() {
    return this.scopes[this.scopes.length - 1];
  }
  getCurrentContext() {
    return this.top().context;
  }
  toString() {
    const topScope = this.top();
    return `Scope(${topScope.name}: ${Object.keys(this.top().entries)})`;
  }
  setSymbol(name: string, value: NodeT) {
    let [found, stackVar] = this.getSymbol(name);
    if (found)
      stackVar = value;
    else
      this.top().entries[name] = value;
  }
  hasSymbol(name: string) {
    return this.scopes.some(scope => scope.entries.hasOwnProperty(name));
  }
  getSymbol(name: string): [boolean, NodeT] {
    // enumerate backwards
    const found = this.currentStack().find(scope => {
      if (scope.entries.hasOwnProperty(name)) return true;
    });
    return found ? [true, found.entries[name]] : [false, undefined];
  }
  newSymbol(name: string, value: NodeT) {
    // shouldnt already be delcared in current scope
    if (this.top().entries.hasOwnProperty(name)) throw new Error(`${name} already exists in current scope`);
    this.top().entries[name] = value;
  }
}