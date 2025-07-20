import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react'
import u from 'updeep'

const DEFAULT_APP_STATE = {
	footerVisible: false,
	modal: null,
	count: 0,
	hasPassedLanding: false,
	displayAltHeader: false,
	scrollThreshold: -1,
	activeSection: "",
}

const AppStateContext = createContext({
	store: DEFAULT_APP_STATE,
	update(patch) {
		console.log('Empty update fn', patch)
	},
})

export const AppStateProvider = ({
	children = null,
	initialValue = DEFAULT_APP_STATE,
}) => {
	const [store, _update] = useState({ ...DEFAULT_APP_STATE, ...initialValue })
	const update = useCallback(
		(patch) => {
			_update({ ...u({ ...patch }, store) });
		},
		[_update, store]
	)

	return (
		<AppStateContext.Provider value={{ store, update }}>
			{children}
		</AppStateContext.Provider>
	)
}

export default function useAppState() {
	const { store, update } = useContext(AppStateContext)
	return useMemo(() => [store, update], [store, update])
}

export function useUpdateAppState() {
	const update = useAppState()[1]
	return useMemo(() => update, [update])
}

export function useSelectAppState(selector, getMemoizationValue = r => r) {
	const [store] = useAppState()
	const result = selector(store)
	const memoized = getMemoizationValue(result)

	return useMemo(() => result, [memoized])
}
