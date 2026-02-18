// src/modules/admin/pages/DashboardPage.tsx
import { useTranslation } from 'react-i18next';
import AdminKPIs from '../components/AdminKPIs';
import SalesChart from '../components/SalesChart';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

export default function DashboardPage() {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-neutral-600">{t('dashboard.subtitle')}</p>
      </div>

      {/* KPIs Section */}
      <AdminKPIs />

      {/* Charts Section */}
      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.salesAnalytics')}</CardTitle>
          <CardDescription>{t('dashboard.salesAnalyticsDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <SalesChart />
        </CardContent>
      </Card>
    </div>
  );
}
