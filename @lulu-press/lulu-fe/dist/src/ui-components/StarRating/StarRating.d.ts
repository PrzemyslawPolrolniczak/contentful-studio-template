import React from "react";
export interface StarRatingProps {
    dataTestId?: string;
    currentRating: number;
    submitRating?: (rating: number) => void;
    disabled?: boolean;
    maxRating?: number;
}
export declare const StarRating: React.FC<StarRatingProps>;
