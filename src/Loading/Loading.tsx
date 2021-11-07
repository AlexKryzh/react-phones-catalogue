import { useAppStore } from 'store';
import './Loading.scss';

function Loading() {
    const [appState] = useAppStore();

    return (
        <aside className={`loading ${appState.isLoading ? 'is-active' : ''}`}>
            <div className="loading__animation">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </aside>
    );
}

export default Loading;
