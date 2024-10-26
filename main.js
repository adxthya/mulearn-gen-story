const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const names = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const places = ["the soup kitchen", "Disneyland", "the White House"];

const actions = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

let text =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

randomize.addEventListener("click", result);

function result() {
  let storyContent = text;

  let characterName = randomValueFromArray(names);
  let place = randomValueFromArray(places);
  let action = randomValueFromArray(actions);

  storyContent = storyContent.replaceAll(":insertx:", characterName);
  storyContent = storyContent.replaceAll(":inserty:", place);
  storyContent = storyContent.replaceAll(":insertz:", action);

  if (customName.value !== "") {
    const name = customName.value;
    storyContent = storyContent.replaceAll("bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.0714286)} stones`;
    const temperature = `${Math.round(((94 - 32) * 5) / 9)} centigrade`;
    storyContent = storyContent.replaceAll("94 fahrenheit", temperature);
    storyContent = storyContent.replaceAll("300 pounds", weight);
  }

  story.textContent = storyContent;
  story.style.visibility = "visible";
}
