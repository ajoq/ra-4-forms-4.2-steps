import './index.css';

function Steps() {
    return (
        <>
            <div className="steps">
                <div className="steps-form">
                    <form className="form">
                        <div className="form-item">
                            <label className="form-lable" htmlFor="date">
                                Дата (ДД.ММ.ГГ)
                            </label>
                            <input
                                className="form-input"
                                name="date"
                                type="date"
                            />
                        </div>
                        <div className="form-item input-distance">
                            <label className="form-lable" htmlFor="distance">
                                Пройдено км
                            </label>
                            <input
                                className="form-input"
                                name="distance"
                                type="number"
                            />
                        </div>
                        <div className="form-item submit">
                            <button className="submit-btn">ОК</button>
                        </div>
                    </form>
                </div>
                <div className="steps-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Дата (ДД.ММ.ГГ)</th>
                                <th>Пройдено км</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13.02.2023</td>
                                <td>5.7</td>
                                <td className="actions">
                                    <span className="edit">✎</span>
                                    <span className="remove">✘</span>
                                </td>
                            </tr>
                            <tr>
                                <td>12.02.2023</td>
                                <td>14.2</td>
                                <td className="actions">
                                    <span className="edit">✎</span>
                                    <span className="remove">✘</span>
                                </td>
                            </tr>
                            <tr>
                                <td>11.02.2023</td>
                                <td>3.4</td>
                                <td className="actions">
                                    <span className="edit">✎</span>
                                    <span className="remove">✘</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Steps;
