import React, { useEffect } from 'react';

export default function CheckOut( {snapToken} ) {
    useEffect(() => {
        const payButton = document.getElementById('pay-button');
        
        if (payButton) {
            payButton.addEventListener('click', function () {
                // Trigger snap popup. Replace TRANSACTION_TOKEN_HERE with your transaction token
                window.snap.pay(snapToken, {
                    onSuccess: function (result) {
                        /* You may add your own implementation here */
                        alert("payment success!");
                        console.log(result);
                    },
                    onPending: function (result) {
                        alert("waiting for your payment!");
                        console.log(result);
                    },
                    onError: function (result) {
                        alert("payment failed!");
                        console.log(result);
                    },
                    onClose: function () {
                        alert('you closed the popup without finishing the payment');
                    }
                })
            });
        }

        return () => {
            // Cleanup event listener when component unmounts
            if (payButton) {
                payButton.removeEventListener('click', handlePayButtonClick);
            }
        };
    }, [snapToken])

    useEffect(() => {
        fetch('SB-Mid-client-6Tra8VT6LYL6STZA')
            .then(response => response.json())
            .then(data => setClientKey(data.clientKey))
            .catch(error => console.error('Error fetching client key:', error));
        }, []);

    return (
        <>
        <script
        type="text/javascript"
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key="SB-Mid-client-6Tra8VT6LYL6STZA"
        ></script>

        <button id="pay-button">Pay!</button>
        </>
    )
}