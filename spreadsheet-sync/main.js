const ROW_HEIGHT = 30;
const ROW_MARGIN = 10;
const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/121-56BwZe8Cws0A8xE_cSGXc64YD_bBPfQM8o2YVnaM/edit?usp=sharing";

miro.onReady(function() {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: "Import stuff",
        svgIcon:
          //'<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-import" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"></path></svg>',
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" id="Icons_Cat" overflow="hidden"><path d="M77.4 24.2 69 12 69 8.4C69 7.5 67.9 7.1 67.3 7.7L53.5 20.6C51.9 22.1 51 24.2 51 26.4L51 27C51 35.5 28 39 28 66 28 69.6 28.2 72.7 28.7 75.3 28.5 75.1 28.3 74.9 28 74.7 25.7 72.5 23 67.6 23 57 23 53.3 24.8 49.5 26.6 45.9 29.4 40.1 32.6 33.5 27.1 27.9 25.9 26.7 24 26.7 22.9 27.9 21.7 29.1 21.7 31 22.9 32.1 25.2 34.4 24.2 37.1 21.3 43.2 19.2 47.3 17 52 17 57 17 67.3 19.4 74.8 24 79.2 26.4 81.5 29 82.4 30.8 82.8 32.7 86.8 35 88 36 88L48 88C49.7 88 51 86.7 51 85 51 83.5 49.9 82.2 48.4 82L45 82C48.8 79.9 52 75.6 52 68 52 61.4 50.7 58.7 46.3 56.3 45.6 55.9 45.3 55 45.7 54.3 46.1 53.6 47 53.3 47.7 53.7 53.8 56.9 55 61.4 55 68 55 71.6 54.3 74.8 53 77.5L53 85C53 86.7 54.3 88 56 88 57.7 88 59 86.7 59 85L59 75.8C59.7 75 60.4 74.1 61 73.1L61 85C61 86.7 62.3 88 64 88 65.7 88 67 86.7 67 85L67 58.4C67.7 55.4 68 52.8 68 51 68 43.1 66 42.3 66 38 66 35.8 67.8 34 70 34 74.4 34 78 30.4 78 26 78 25.3 77.8 24.7 77.4 24.2Z"/></svg>,
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
  const maxWidth = Math.max(...items.map(item => item.rate)) * 2;

  items.forEach(async ({ role, rate }, i) => {
    rate = parseFloat(rate);

    const shapes = (
      await miro.board.widgets.get({
        type: "shape"
      })
    ).filter(shape => !!shape.metadata[appId]);
    const shape = shapes.find(shape => shape.metadata[appId].role === role);
    const width = rate * 2;

    if (shape) {
      const x = shape.x - (shape.width - width) / 2;
      miro.board.widgets.update([{ id: shape.id, text: `${rate}%`, width, x }]);
    } else {
      const x = viewport.x + viewport.width / 2 - (maxWidth - width) / 2;
      const y = viewport.y + ROW_HEIGHT / 2 + (ROW_HEIGHT + ROW_MARGIN) * i;
      miro.board.widgets.create({
        type: "shape",
        text: `${rate}%`,
        width,
        height: ROW_HEIGHT,
        x,
        y,
        style: {
          borderWidth: 0,
          backgroundColor: "#4262ff",
          fontSize: 8,
          textAlign: "c",
          textAlignVertical: "m",
          textColor: "#ffffff"
        },
        metadata: {
          [appId]: {
            role
          }
        }
      });
      miro.board.widgets.create({
        type: "text",
        x: viewport.x + viewport.width / 2 - maxWidth - 110,
        y,
        width: 400,
        style: {
          textAlign: "r",
          fontSize: 12
        },
        text: role,
        metadata: {
          [appId]: {
            role
          }
        }
      });
    }
  });
}
