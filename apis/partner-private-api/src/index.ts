import { makeLibraryThing } from "library/src/index";

const makeApiThing = (n: number) => n.toString();

makeApiThing(makeLibraryThing("sdads"));

export { makeApiThing };
