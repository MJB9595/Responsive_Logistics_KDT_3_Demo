/** 대시보드(오버뷰)용 목업 데이터 — 사이드바 각 도메인을 한눈에 요약.
 *  추후 MSW + TanStack Query로 교체하기 쉽도록 도메인 단위로 분리해 둔다. */

export type Tint = 'sky' | 'indigo' | 'emerald' | 'teal' | 'amber' | 'violet' | 'rose' | 'cyan'

/* ── 상단 KPI (도메인 교차 핵심 지표) ─────────────────────────── */
export interface Kpi {
  key: string
  label: string
  value: number
  unit: string
  decimals?: number
  trend?: number
  note?: string
  iconKey: 'orders' | 'transit' | 'ontime' | 'warehouse' | 'drivers' | 'temp'
  tint: Tint
}

export const KPIS: Kpi[] = [
  { key: 'orders', label: '전체 주문', value: 12530, unit: '건', trend: 3.2, iconKey: 'orders', tint: 'sky' },
  { key: 'transit', label: '배송 중', value: 6850, unit: '건', trend: 5.1, iconKey: 'transit', tint: 'indigo' },
  { key: 'ontime', label: '정시 배송률', value: 98.7, unit: '%', decimals: 1, trend: 2.3, iconKey: 'ontime', tint: 'emerald' },
  { key: 'warehouse', label: '창고 가동률', value: 78.4, unit: '%', decimals: 1, trend: 1.6, iconKey: 'warehouse', tint: 'teal' },
  { key: 'drivers', label: '운행 기사', value: 42, unit: '명', trend: 4.2, iconKey: 'drivers', tint: 'amber' },
  { key: 'temp', label: '온도 이탈', value: 0, unit: '건', note: '24시간 정상', iconKey: 'temp', tint: 'rose' },
]

/* ── 운영: 주문 관리 요약 ────────────────────────────────────── */
export const ORDER_STATUS = [
  { label: '신규 접수', count: 320, color: '#8b5cf6' },
  { label: '처리 중', count: 1245, color: '#3b82f6' },
  { label: '배송 준비', count: 2410, color: '#f59e0b' },
  { label: '배송 중', count: 6840, color: '#0ea5e9' },
  { label: '배송 완료', count: 1587, color: '#10b981' },
  { label: '취소/반품', count: 128, color: '#f43f5e' },
]
export const ORDER_TOTAL = ORDER_STATUS.reduce((s, d) => s + d.count, 0) // 12,530

/* ── 운영: 배송 관리 요약 ────────────────────────────────────── */
export const DELIVERY = { inTransit: 6850, completed: 5350, delayed: 150, onTimeRate: 98.7 }

/* ── 운영: 경로 최적화 요약 ──────────────────────────────────── */
export const ROUTE_METRICS = [
  { label: '총 운행 거리', value: '12,850', unit: 'km', trend: -8.5 },
  { label: '연료 절감', value: '2,340', unit: 'L', trend: -5.2 },
  { label: '운행 시간 절약', value: '45.2', unit: '시간', trend: -12.3 },
  { label: '경로 효율 향상', value: '23.7', unit: '%', trend: 4.6 },
]

/* ── 자원: 창고 관리 요약 ────────────────────────────────────── */
export const WAREHOUSES = [
  { name: '냉장 A동', type: '냉장', typeCls: 'bg-sky-100 text-sky-700', capacity: 82, temp: '2.4°C' },
  { name: '냉동 B동', type: '냉동', typeCls: 'bg-indigo-100 text-indigo-700', capacity: 74, temp: '-18°C' },
  { name: '상온 C동', type: '상온', typeCls: 'bg-amber-100 text-amber-700', capacity: 65, temp: '18°C' },
]

/* ── 자원: 기사 관리 요약 ────────────────────────────────────── */
export const DRIVERS = { active: 42, idle: 4, off: 2, total: 48 }
export const TOP_DRIVERS = [
  { name: '김민수', region: '수도권', deliveries: 38, rating: 4.9 },
  { name: '이영훈', region: '영남권', deliveries: 35, rating: 4.8 },
  { name: '박지훈', region: '호남권', deliveries: 33, rating: 4.8 },
]

/* ── 분석: 주간 입출고 추이 ──────────────────────────────────── */
export const WEEKLY = [
  { day: '월', inbound: 2400, outbound: 2100 },
  { day: '화', inbound: 2650, outbound: 2300 },
  { day: '수', inbound: 2200, outbound: 2500 },
  { day: '목', inbound: 2900, outbound: 2650 },
  { day: '금', inbound: 3100, outbound: 2840 },
  { day: '토', inbound: 1800, outbound: 1600 },
  { day: '일', inbound: 1200, outbound: 1100 },
]
export const WEEK_INBOUND = WEEKLY.reduce((s, d) => s + d.inbound, 0)
export const WEEK_OUTBOUND = WEEKLY.reduce((s, d) => s + d.outbound, 0)

/* ── 시스템: 알림/메시지 ─────────────────────────────────────── */
export const ALERTS = [
  { type: 'temp', title: '냉동 B동 온도 정상', desc: '-18°C 설정 범위 내 유지 중', time: '방금 전' },
  { type: 'expiry', title: '유통기한 임박 3건', desc: '냉동 참치 외 2건 · D-1 우선 출고', time: '12분 전' },
  { type: 'delay', title: '배송 지연 5건', desc: '수도권 기상 영향 · 확인 필요', time: '34분 전' },
  { type: 'stock', title: '재고 부족 알림', desc: '냉장 우유 안전재고 이하', time: '1시간 전' },
] as const
