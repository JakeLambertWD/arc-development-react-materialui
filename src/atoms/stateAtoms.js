import { atom } from 'recoil';

export const valueState = atom({
	key: 'value',
	default: 0
});

export const selectedIndexState = atom({
	key: 'selectedIndex',
	default: 0
});
