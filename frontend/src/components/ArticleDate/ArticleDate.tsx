"use client";
/**
 * This component has to be client side because of localization.
 */

import { dateFormatter } from "@/utils/date.utils";

type Props = {
    createdAt: string;
    updatedAt: string;
};

export function ArticleDate(props: Props) {
    const { createdAt, updatedAt } = props;

    const createdAtFormatted = dateFormatter.format(new Date(createdAt));
    const updatedAtFormatted = dateFormatter.format(new Date(updatedAt));

    const showLastUpdate = createdAtFormatted !== updatedAtFormatted;

    if (showLastUpdate) {
        return (
            <abbr title={`Last update: ${updatedAtFormatted}`}>
                {createdAtFormatted}
            </abbr>
        );
    }

    return <span>{createdAtFormatted}</span>;
}
