// reconciliation logic belo

export function reconcile(internal, provider) {
    const iMap = new Map(internal.map(tx => [tx.transaction_reference, tx]));
    const pMap = new Map(provider.map(tx => [tx.transaction_reference, tx]));

    const matched = [];
    const internalOnly = [];
    const providerOnly = [];

    for (let [ref, iTx] of iMap) {
        const pTx = pMap.get(ref);
        if (pTx) {
            matched.push({
                ...iTx,
                amountMismatch: iTx.amount !== pTx.amount,
                statusMismatch: iTx.status !== pTx.status,
            });
            pMap.delete(ref);
        } else {
            internalOnly.push(iTx);
        }
    }
    for (let [_, pTx] of pMap) {
        providerOnly.push(pTx);
    }

    return { matched, internalOnly, providerOnly };



}   


