import { Counter } from "./contexts/@";

export function App() {

	return (
		<>
			<header></header>
            <main class="p-2">
                <h2>Hello!</h2>
                <p>Courrent count: {Counter.get()}</p>
                <p class="flex gap-1">
                    <button class="bg-lime-500 flex-1 p-2 rounded" onClick={Counter.increment}>+1</button>
                    <button class="bg-rose-500 flex-1 p-2 rounded" onClick={Counter.decrement}>-1</button>
                </p>
            </main>
			<footer></footer>
		</>
	);
}
