/* global SillyTavern */
import katex from 'katex';
import asciiMathToLatex from 'asciimath-to-latex';

const {
    eventSource,
    event_types,
} = SillyTavern.getContext();

const events = [
    event_types.CHARACTER_MESSAGE_RENDERED,
    event_types.USER_MESSAGE_RENDERED,
    event_types.CHAT_CHANGED,
    event_types.MESSAGE_SWIPED,
    event_types.MESSAGE_UPDATED,
];

// Set event listeners for chat events.
for (const event of events) {
    eventSource.on(event, renderMath);
}

async function renderMath() {
    const blocks = document.querySelectorAll('#chat pre > code, #chat code');

    let processed = 0;

    for (const block of blocks) {
        const isLatex = block.classList.contains('custom-language-latex');
        const isAsciiMath = block.classList.contains('custom-language-asciimath');

        if (!isLatex && !isAsciiMath) {
            continue;
        }

        if (isAsciiMath) {
            const asciiMath = block.textContent;
            const latex = asciiMathToLatex(asciiMath);
            block.textContent = latex;
        }

        const parent = block.parentElement;
        if (parent.localName === 'pre') {
            const node = document.createElement('section');
            node.innerHTML = block.innerHTML;
            parent.parentNode.replaceChild(node, parent);
            katex.render(node.innerText, node, { throwOnError: false, displayMode: true });
        } else {
            const node = document.createElement('span');
            node.innerHTML = block.innerHTML;
            block.parentNode.replaceChild(node, block);
            katex.render(node.innerText, node, { throwOnError: false });
        }

        ++processed;
    }

    if (!processed) {
        return;
    }

    // Wait for the chat to update.
    await new Promise((resolve) => setTimeout(resolve, 0));
}
