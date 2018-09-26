
export class CampaignWinner {
    CampaignId: number;
    CouponCode: string;
    Winner: Winner;
}

export class Winner {
    WinnerId: number;
    FirstName: string;
    LastName: string;
    AddressLine: string;
    PostalCode: string;
}

