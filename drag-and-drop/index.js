const icon24 = '<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Icons_Palette" overflow="hidden"><path d="M78 51C75.2 51 73 49.4 73 47.5 73 45.6 75.2 44 78 44 80.8 44 83 45.6 83 47.5 83 49.4 80.8 51 78 51ZM73 62C70.2 62 68 60.4 68 58.5 68 56.6 70.2 55 73 55 75.8 55 78 56.6 78 58.5 78 60.4 75.8 62 73 62ZM62 34C59.2 34 57 32.4 57 30.5 57 28.6 59.2 27 62 27 64.8 27 67 28.6 67 30.5 67 32.4 64.8 34 62 34ZM62 68C59.2 68 57 66.4 57 64.5 57 62.6 59.2 61 62 61 64.8 61 67 62.6 67 64.5 67 66.4 64.8 68 62 68ZM48 71C45.2 71 43 69.4 43 67.5 43 65.6 45.2 64 48 64 50.8 64 53 65.6 53 67.5 53 69.4 50.8 71 48 71ZM42.6 30.6C44.2 29 46.3 28.7 47.4 29.8 48.5 30.9 48.1 33 46.6 34.6 45 36.2 42.9 36.5 41.8 35.4 40.6 34.3 41 32.1 42.6 30.6ZM34 69C31.2 69 29 67.4 29 65.5 29 63.6 31.2 62 34 62 36.8 62 39 63.6 39 65.5 39 67.4 36.8 69 34 69ZM73 34C75.8 34 78 35.6 78 37.5 78 39.4 75.8 41 73 41 70.2 41 68 39.4 68 37.5 68 35.6 70.2 34 73 34ZM48 20C25.3 20 28.9 28.9 31 31L36 36C39.2 39.3 35.3 43 31.6 41.4L19.1 36C10.3 32.2 8 42.9 8 48 8 63.5 25.9 76 48 76 70.1 76 88 63.5 88 48 88 32.5 70.1 20 48 20Z"/></svg>'

function run() {
	miro.initialize({
		extensionPoints: {
			bottomBar: {
				title: 'Architecture Icons',
				svgIcon: icon24,
				onClick: () => {
					miro.board.ui.openLibrary('content.html', {title: 'Architecture Icons'})
				}
			},
			getWidgetMenuItems: (widgets) => {
				return Promise.resolve({
					tooltip: 'Placeholder for more stuff...',
					svgIcon: icon24,
					onClick: (widgets) => {
						console.log('onClick', widgets)
					}
				})
			}
		}
	})
}

miro.onReady(run)
