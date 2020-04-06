const ROW_HEIGHT = 30;
const ROW_MARGIN = 10;
const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/17TC6VsTfySYd3Ad8S28POkurG0OqOCnZzcKiFQ6lj50/edit?usp=sharing";
//const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/121-56BwZe8Cws0A8xE_cSGXc64YD_bBPfQM8o2YVnaM/edit?usp=sharing";
const SEEDTITLE = "SEED";
var currentGroup = "";
var r = 0;

miro.onReady(function() {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: "this is the cat 21",
        svgIcon:
          //'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Icons_Cat" overflow="hidden"><path d="M77.4 24.2 69 12 69 8.4C69 7.5 67.9 7.1 67.3 7.7L53.5 20.6C51.9 22.1 51 24.2 51 26.4L51 27C51 35.5 28 39 28 66 28 69.6 28.2 72.7 28.7 75.3 28.5 75.1 28.3 74.9 28 74.7 25.7 72.5 23 67.6 23 57 23 53.3 24.8 49.5 26.6 45.9 29.4 40.1 32.6 33.5 27.1 27.9 25.9 26.7 24 26.7 22.9 27.9 21.7 29.1 21.7 31 22.9 32.1 25.2 34.4 24.2 37.1 21.3 43.2 19.2 47.3 17 52 17 57 17 67.3 19.4 74.8 24 79.2 26.4 81.5 29 82.4 30.8 82.8 32.7 86.8 35 88 36 88L48 88C49.7 88 51 86.7 51 85 51 83.5 49.9 82.2 48.4 82L45 82C48.8 79.9 52 75.6 52 68 52 61.4 50.7 58.7 46.3 56.3 45.6 55.9 45.3 55 45.7 54.3 46.1 53.6 47 53.3 47.7 53.7 53.8 56.9 55 61.4 55 68 55 71.6 54.3 74.8 53 77.5L53 85C53 86.7 54.3 88 56 88 57.7 88 59 86.7 59 85L59 75.8C59.7 75 60.4 74.1 61 73.1L61 85C61 86.7 62.3 88 64 88 65.7 88 67 86.7 67 85L67 58.4C67.7 55.4 68 52.8 68 51 68 43.1 66 42.3 66 38 66 35.8 67.8 34 70 34 74.4 34 78 30.4 78 26 78 25.3 77.8 24.7 77.4 24.2Z"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.8 46.65"><defs><style>.cls-1{fill:#231f20;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M67.84,42.9A8.5,8.5,0,0,0,72.14,44l-1,2.62a8.84,8.84,0,0,1-4.55-1.24A24.84,24.84,0,0,1,61.2,40.8a17.63,17.63,0,0,1-13.69,5.85,17.14,17.14,0,0,1-7.12-1.41,11.64,11.64,0,0,1-4.89-3.92,9.8,9.8,0,0,1-1.75-5.75,11.94,11.94,0,0,1,2.75-7.81,30.2,30.2,0,0,1,8.74-6.64,46,46,0,0,1-4.44-6.57,10.76,10.76,0,0,1-1.2-4.92,9.33,9.33,0,0,1,2.75-6.84A10,10,0,0,1,49.78,0,11,11,0,0,1,56.9,2.24a7.83,7.83,0,0,1,2.79,6.5,11.84,11.84,0,0,1-2.07,6.91q-2.05,3-7.91,6.3,2.9,3.78,4.68,6.05,4.13,5.24,6.67,8.33a22.77,22.77,0,0,0,2.79-6.81,31.41,31.41,0,0,0,.79-8.33l2.82.28a33,33,0,0,1-1,9.18A24.61,24.61,0,0,1,63,38.53,22.27,22.27,0,0,0,67.84,42.9ZM54,42.48a15,15,0,0,0,5.23-3.81q-3.51-4.14-7.15-8.74L47,23.46a31.8,31.8,0,0,0-7.78,5.75A9,9,0,0,0,37,35.36a7.4,7.4,0,0,0,3,6.13,11.5,11.5,0,0,0,7.32,2.34A16.33,16.33,0,0,0,54,42.48ZM44.69,4.82a6.4,6.4,0,0,0-1.86,4.74,8.74,8.74,0,0,0,.93,4,48.13,48.13,0,0,0,4.16,6.13q5.16-2.76,6.92-5.27a9.54,9.54,0,0,0,1.75-5.6,5.34,5.34,0,0,0-1.82-4.34A7.69,7.69,0,0,0,49.71,3,6.78,6.78,0,0,0,44.69,4.82Z"/><path class="cls-1" d="M32.13,43.29v3.17H0V1.05H31V4.22H3.44V21.76H25.25V25H3.44v18.3Z"/><path class="cls-1" d="M104.44,32.22H82.7L77.06,46.46H73.41L91.57,1.05h4.06L113.8,46.46h-3.65Zm-1.24-3.17L95.29,9.24,93.64,4.42h-.07L91.92,9.1,84,29.05Z"/></g></g></svg>',
          onClick: syncWithSheet
      }
    }
  });
});

async function syncWithSheet() {
  const appId = await miro.getClientId();
  const items = await Tabletop.init({
    key: SPREADSHEET_URL,
    simpleSheet: true
  });

  const viewport = await miro.board.viewport.get();
  const maxWidth = 300;

  let frames = await miro.board.widgets.get({type: "frame"});
  const seedframe = frames.find(seedframe => seedframe.title === SEEDTITLE);
  const SeedColor = seedframe.style.backgroundColor
  const SeedX = seedframe.x
  const SeedY = seedframe.y
  const SeedWidth = seedframe.width
  const SeedHeight = seedframe.height

  items.forEach(async ({ Group, ItemName }, i) => {

    

    const frame = frames.find(frame => frame.title === ItemName);
    const Groupframe = frames.find(Groupframe => Groupframe.title === Group);

    const GroupframeColor = Groupframe.style.backgroundColor
    const GroupframeX = Groupframe.x
    const GroupframeY = Groupframe.y
    //const GroupframeWidth = Groupframe.width
    //const SGroupframeHeight = Groupframe.height

    if (frame) {
      alert(frame & "deja la");
      
    } else {

      if (currentGroup != Group) {
        r = 1
      }
      
      //alert(r);
  
      miro.board.widgets.create({
        type: "frame",
        x: GroupframeX + (SeedWidth + 50)*(r),
        y: GroupframeY,
        width: SeedWidth,
        height: SeedHeight,
        style: {
          textAlign: "r",
          fontSize: 12,
          borderWidth: 0,
          backgroundColor: GroupframeColor,
        },
        title: ItemName,

      });
    }
    r=r+1
    currentGroup = Group
  });
}
