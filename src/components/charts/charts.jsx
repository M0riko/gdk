import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import './charts.scss'
Chart.register(...registerables);

const ServiceSalesAndSocialMediaCharts = () => {
    useEffect(() => {
        // График продаж услуг
        const ctxSales = document.getElementById('serviceSalesChart').getContext('2d');
        const serviceSalesChart = new Chart(ctxSales, {
            type: 'bar',
            data: {
                labels: ['Лендинги', 'Корпоративні сайти', 'Інтернет-магазини', 'Блог', 'Сайти-портфоліо'],
                datasets: [{
                    label: 'Продажі послуг (кількість)',
                    data: [15, 5, 3, 2, 1],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // График зарплат сотрудников
        const ctxSalaries = document.getElementById('salaryChart').getContext('2d');
        const salaryChart = new Chart(ctxSalaries, {
            type: 'bar',
            data: {
                labels: ['Андрій Діденко', 'Андрій Гуров', 'Саша Дмитришин', 'Богдан Дятлюк', 'Саша Давигора'],
                datasets: [{
                    label: 'Зарплати (грн)',
                    data: [40000, 25000, 23000, 24000, 23500],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // График пользователей Telegram
        const ctxTelegram = document.getElementById('telegramChart').getContext('2d');
        const telegramChart = new Chart(ctxTelegram, {
            type: 'pie',
            data: {
                labels: ['Активні', 'Неактивні', 'Потенційні'],
                datasets: [{
                    label: 'Користувачі Telegram',
                    data: [150, 25, 500],
                    backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(255, 206, 86, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                    borderWidth: 1,
                }]
            }
        });

        // График статистики LinkedIn
        const ctxLinkedIn = document.getElementById('linkedinChart').getContext('2d');
        const linkedinChart = new Chart(ctxLinkedIn, {
            type: 'doughnut',
            data: {
                labels: ['Перегляди профілю', 'Залучення', 'Підписки'],
                datasets: [{
                    label: 'Статистика LinkedIn',
                    data: [50, 10, 50],
                    backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                    borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                    borderWidth: 1,
                }]
            }
        });

        return () => {
            serviceSalesChart.destroy();
            salaryChart.destroy();
            telegramChart.destroy();
            linkedinChart.destroy();
        };
    }, []);

    return (
        <section id="charts" className="charts">
            <h2>Графіки Продажів Послуг, Зарплат та Соціальних Мереж</h2>
            <div className="chart-container">
                <div className="chart">
                    <h3>Продажі Послуг</h3>
                    <canvas id="serviceSalesChart"></canvas>
                </div>
                <div className="chart">
                    <h3>Зарплати</h3>
                    <canvas id="salaryChart"></canvas>
                </div>
            </div>
            <div className="chart-container">
                <div className="chart">
                    <h3>Користувачі Telegram</h3>
                    <canvas id="telegramChart"></canvas>
                </div>
                <div className="chart">
                    <h3>Статистика LinkedIn</h3>
                    <canvas id="linkedinChart"></canvas>
                </div>
            </div>
        </section>
    );
};

export default ServiceSalesAndSocialMediaCharts;
