import { makeLibraryThing } from "library/src/index";

const makeUiThing = (b: boolean) => b.valueOf();

makeUiThing(makeLibraryThing("asd") === 0);
