import { random, range } from "lodash-es";

const sounds = range(9).map((i) => `sounds/sound${i + 1}.wav`);

export const getRandomSound = () =>
  sounds.at(random(0, sounds.length - 1)) as string;
