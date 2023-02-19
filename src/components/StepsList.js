import Step from './Step.js/index.js';

function StepsList({ steps, onChangeStep, onRemoveStep }) {
    return steps.map((step) => (
        <tr key={step.id}>
            <Step step={step} onChange={onChangeStep} onRemove={onRemoveStep} />
        </tr>
    ));
}

export default StepsList;
