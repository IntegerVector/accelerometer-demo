import { getAccelerometerPermission } from './helpers/permissions-helper';
import { AppAccelerometer } from './accelerometer';
import { DisplayText } from './display-text';
import { DisplayObject } from './display-object';

(async function() {
	const display = new DisplayText('display-text');
	const targetObject = new DisplayObject('target');
	const permission = await getAccelerometerPermission();

	if (permission.state !== 'granted') {
		display.addChildText('Application not allowed to use accelerometer');
		return;
	}

	const acl = new AppAccelerometer({ frequency: 10 });
	acl.onError.subscribe(errMsg => {
		display.addChildText(errMsg);
	});

	acl.update.subscribe(({ x, y, z }) => {
		targetObject.setPosition({ x, y, z });
		display.setMainText(`X:${x} Y:${y} Z:${z}`);
	});

	acl.start();

	display.addChildText('Client application ready');
})();

