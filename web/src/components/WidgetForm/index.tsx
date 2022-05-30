import { CloseButton } from "../CloseButton";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        source: bugImageUrl,
        alt: 'Imagem de um Inseto'

    },
    IDEA: {
        title: 'Idéia',
        source: ideaImageUrl,
        alt: 'Imagem de uma lâmpada'

    },
    OTHER: {
        title: 'Outro',
        source: thoughtImageUrl,
        alt: 'Imagem de uma balão de pensamento'
    },
};

// Tipos do Objeto acima
export type FeedbackType = keyof typeof feedbackTypes;

/* Object.entries(feedbackTypes) =>

    [
        ['BUG', {...}],
        ['IDEA', {...}],
        ['THOUGHT', {...}],
    ]
*/

export function WidgetForm() {
    // Criação do Estado para a manipulação dos Widgets
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ❤ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}