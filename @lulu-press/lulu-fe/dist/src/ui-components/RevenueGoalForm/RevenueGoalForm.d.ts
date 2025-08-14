import React from "react";
export interface RevenueGoalFormProps {
    dataTestId?: string;
    currencies: string[];
    revenueGoal: RevenueGoal;
    onChange: (revenueGoal: RevenueGoal) => void;
    error?: string;
    disabled?: boolean;
}
export interface RevenueGoal {
    amount: string;
    currency: string;
}
export declare const RevenueGoalForm: React.FC<RevenueGoalFormProps>;
