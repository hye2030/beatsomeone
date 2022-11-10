import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

function Main() {
    const navigate  = useNavigate();

    const startPay = () => {
        var clientKey = "test_ck_O6BYq7GWPVvxxgXdR748NE5vbo1d";
        var tossPayments = TossPayments(clientKey);
        tossPayments.requestBillingAuth("카드", {
            amount: 15000,
            orderId: 'gRFnBkYCE0Dlc7qK1hbSB',
            orderName: '토스 티셔츠 외 2건',
            customerName: '박토스',
            customerKey: "_TIHVTU_erIULLalNSqzQ",
            successUrl: window.location.origin + "/success",
            failUrl: window.location.origin + "/fail"
        });
    }

    const startAccount = () => {
        var clientKey = 'test_ck_O6BYq7GWPVvxxgXdR748NE5vbo1d'
        var tossPayments = TossPayments(clientKey) // 클라이언트 키로 초기화하기

        tossPayments.requestPayment('가상계좌', { // 결제 수단 파라미터
            // 결제 정보 파라미터
            amount: 1000,
            orderId: 'At2xvJVhxtxBNnC0hDIc-',
            orderName: '토스 티셔츠 외 2건',
            customerName: '박토스',
            successUrl: 'http://localhost:3000/payment/toss',
            failUrl: 'http://localhost:3000/payment/toss',
            validHours: 24,
            cashReceipt: {
              type: '소득공제',
            },
        })
    }

    const startBrandPay = () => {
        var clientKey = 'test_ck_O6BYq7GWPVvxxgXdR748NE5vbo1d' // 테스트용 클라이언트 키
        var customerKey = 'iBY5gSefh5QW6hgECXrct' // 고객을 식별할 수 있는 키
        // 2. 초기화
        var brandpay = BrandPay(clientKey, customerKey, {
            redirectUrl: 'http://localhost:3000/payment/toss',
            ui: {
            buttonStyle: 'full',
            highlightColor: '#26C2E3',
            labels: {
                oneTouchPay: '내 상점 원터치결제',
            },
            },
        })

        brandpay.requestPayment({
            amount: 15000, // 결제 금액
            orderId: 'yjg_Wa_q7f4tXJxaxx5tO', // 주문에 대한 ID 값
            orderName: '토스 티셔츠 외 2건', // 주문명
            methodId: 'Cf75EYA6vkFIumTd9aO84', // 결제 수단 ID
            customerEmail: 'customer@example.com', // 고객의 이메일 주소 (optional)
          })
          .then(function (result) {
            // 상점 서버에서 구현한 결제 승인 API
            return axios.post('https://merchant.com/shop/confirm-payment', result)
          })
          .then(function () {
            // 승인 완료시 결제 성공 페이지로 리다이렉트
            window.location.href = 'https://merchant.com/shop/payment-success'
          })
    }

    return (
        <>
        <div style={{fontSize:"100px"}} onClick={() => {startPay()}}>카드결제</div>
        <div style={{fontSize:"100px"}} onClick={() => {startAccount()}}>가상계좌</div>
        <div style={{fontSize:"100px"}} onClick={() => {startBrandPay()}}>브랜드페이</div>
        </>
    );
}

export default Main;
