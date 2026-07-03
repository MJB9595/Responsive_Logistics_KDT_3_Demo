import { Link, useParams } from 'react-router-dom'
import { ChevronRight, LayoutDashboard } from '../components/icons'

/** 사이드바 각 메뉴에 대응하는 라벨 (팀원이 페이지를 채울 때 참고) */
const SECTION_LABELS: Record<string, { label: string; desc: string }> = {
  orders: { label: '주문 관리', desc: '전체 주문 현황을 확인하고 관리하는 페이지입니다.' },
  delivery: { label: '배송 관리', desc: '배송 현황을 실시간으로 모니터링하고 관리하는 페이지입니다.' },
  routes: { label: '경로 최적화', desc: 'AI 기반 최적 경로를 설계하고 효율성을 분석하는 페이지입니다.' },
  warehouses: { label: '창고 관리', desc: '창고별 재고·온도 현황을 관리하는 페이지입니다.' },
  drivers: { label: '기사 관리', desc: '배송 기사 배정과 운행 현황을 관리하는 페이지입니다.' },
  reports: { label: '분석 리포트', desc: '운영 지표를 시각화하고 리포트를 생성하는 페이지입니다.' },
  messages: { label: '알림/메시지', desc: '시스템 알림과 메시지를 확인하는 페이지입니다.' },
  settings: { label: '설정', desc: '시스템 환경 설정 페이지입니다.' },
}

/**
 * 준비 중 페이지 골조(스켈레톤).
 * 대시보드 외 메뉴는 팀에서 채워 넣을 슬롯으로, 레이아웃 골격만 표시한다.
 */
export default function PlaceholderPage() {
  const { section = '' } = useParams()
  const meta = SECTION_LABELS[section]

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="flex items-center gap-2 text-[12px] text-slate-400">
        <Link to="/" className="transition-colors hover:text-sky-600">
          대시보드
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-slate-600">{meta?.label ?? '알 수 없는 페이지'}</span>
      </div>

      <div className="mt-4">
        <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-[12px] font-bold text-amber-600 ring-1 ring-amber-200">
          골조(스켈레톤) 단계 — 준비 중
        </span>
        <h1 className="mt-3 text-[24px] font-extrabold tracking-tight text-slate-900">
          {meta?.label ?? '페이지를 찾을 수 없습니다'}
        </h1>
        <p className="mt-1.5 text-[14px] text-slate-500">
          {meta?.desc ?? '주소를 다시 확인해 주세요.'} 이 화면은 팀에서 채워 넣을 페이지 골조입니다.
        </p>
      </div>

      {/* skeleton mock — 채워질 레이아웃의 뼈대 미리보기 */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-2xl border border-slate-200 bg-white p-5">
            <div className="h-3 w-20 rounded bg-slate-100" />
            <div className="mt-4 h-7 w-28 rounded bg-slate-200/80" />
          </div>
        ))}
      </div>
      <div className="mt-4 h-72 animate-pulse rounded-2xl border border-slate-200 bg-white p-6" aria-hidden="true">
        <div className="h-4 w-40 rounded bg-slate-200/80" />
        <div className="mt-3 h-3 w-64 rounded bg-slate-100" />
        <div className="mt-8 space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-10 rounded-lg bg-slate-100" />
          ))}
        </div>
      </div>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 px-5 py-3 text-[14px] font-bold text-white shadow-sm shadow-sky-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
      >
        <LayoutDashboard className="h-4 w-4" />
        대시보드로 돌아가기
      </Link>
    </div>
  )
}
