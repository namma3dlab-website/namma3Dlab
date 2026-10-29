'use client';

import React from 'react';
import {
  Printer,
  Thermometer,
  Layers,
  Clock,
  Play,
  Pause,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { useAdminData } from '@/context/AdminDataContext';
import { PrinterMachine } from '@/lib/adminData';

export default function FleetPage() {
  const { printers, updatePrinterStatus } = useAdminData();

  const activeCount = printers.filter(p => p.status === 'Printing').length;

  const handleToggleState = (p: PrinterMachine) => {
    if (p.status === 'Printing') {
      updatePrinterStatus(p.id, { status: 'Idle', currentJob: undefined, currentProgress: 0 });
    } else {
      updatePrinterStatus(p.id, {
        status: 'Printing',
        currentJob: 'Parametric Calibration Cube',
        currentProgress: 15,
        nozzleTemp: 220,
        targetNozzleTemp: 220,
        bedTemp: 60,
        targetBedTemp: 60,
        timeRemaining: '45m'
      });
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--green-ink)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            Hardware Automation &bull; Farm Telemetry
          </span>
          <h1 style={{ fontSize: '28px', color: 'var(--navy)', margin: 0 }}>
            3D Print Farm Fleet Monitor
          </h1>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--slate)' }}>
            Real-time nozzle temperatures, filament spool levels, and automated slicing queues for Bangalore lab.
          </p>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
          <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>
            {activeCount} of {printers.length} Machines Active
          </strong>
        </div>
      </div>

      {/* Printers Grid */}
      <div className="admin-fleet-grid">
        {printers.map(printer => {
          const isPrinting = printer.status === 'Printing';
          return (
            <div
              key={printer.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--line)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header: Machine Name & Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div>
                    <strong style={{ fontSize: '15px', color: 'var(--navy)', display: 'block' }}>
                      {printer.name}
                    </strong>
                    <span style={{ fontSize: '11px', color: 'var(--slate)' }}>
                      {printer.type} &bull; {printer.buildVolume}
                    </span>
                  </div>
                  <span
                    className={`badge ${
                      printer.status === 'Printing'
                        ? 'badge-lime'
                        : printer.status === 'Idle'
                        ? 'badge-slate'
                        : 'badge-amber'
                    }`}
                  >
                    {printer.status}
                  </span>
                </div>

                {/* Job Information */}
                {isPrinting ? (
                  <div style={{ background: 'var(--surface-alt)', borderRadius: '12px', padding: '14px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--navy)', marginBottom: '6px' }}>
                      <strong style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '170px' }}>
                        {printer.currentJob}
                      </strong>
                      <span style={{ fontWeight: 800 }}>{printer.currentProgress}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
                      <div
                        style={{
                          width: `${printer.currentProgress}%`,
                          height: '100%',
                          background: 'var(--lime-dark)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--slate)' }}>
                      <span>Ref: {printer.currentOrderRef || 'N/A'}</span>
                      <span>ETA: <strong>{printer.timeRemaining}</strong></span>
                    </div>
                  </div>
                ) : (
                  <div style={{ padding: '24px 14px', textAlign: 'center', background: 'var(--surface-alt)', borderRadius: '12px', marginBottom: '16px', color: 'var(--slate)', fontSize: '12px' }}>
                    Ready for next queued STL toolpath
                  </div>
                )}

                {/* Telemetry Numbers */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ border: '1px solid var(--line)', borderRadius: '10px', padding: '10px', background: '#FFFFFF' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', display: 'block' }}>
                      Nozzle Temp
                    </span>
                    <strong style={{ fontSize: '16px', color: 'var(--navy)' }}>
                      {printer.nozzleTemp}°C
                    </strong>
                    <span style={{ fontSize: '10px', color: 'var(--slate-light)' }}> / {printer.targetNozzleTemp}°C</span>
                  </div>

                  <div style={{ border: '1px solid var(--line)', borderRadius: '10px', padding: '10px', background: '#FFFFFF' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', display: 'block' }}>
                      Bed Temp
                    </span>
                    <strong style={{ fontSize: '16px', color: 'var(--navy)' }}>
                      {printer.bedTemp}°C
                    </strong>
                    <span style={{ fontSize: '10px', color: 'var(--slate-light)' }}> / {printer.targetBedTemp}°C</span>
                  </div>
                </div>

                {/* Spool Material */}
                <div style={{ border: '1px solid var(--line)', borderRadius: '10px', padding: '10px', marginBottom: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: 'var(--slate)', textTransform: 'uppercase', display: 'block' }}>
                      Loaded Spool
                    </span>
                    <strong style={{ fontSize: '12px', color: 'var(--navy)' }}>
                      {printer.filamentType}
                    </strong>
                    <span style={{ fontSize: '11px', color: 'var(--slate)', display: 'block' }}>
                      {printer.filamentColor}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ fontSize: '15px', color: 'var(--green-ink)' }}>
                      {printer.filamentRemainingPercent}%
                    </strong>
                    <span style={{ fontSize: '10px', color: 'var(--slate)', display: 'block' }}>Spool Left</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => handleToggleState(printer)}
                  className={`btn ${isPrinting ? 'btn-danger' : 'btn-lime'} btn-sm`}
                  style={{ flex: 1 }}
                >
                  {isPrinting ? (
                    <>
                      <Pause size={13} /> Pause / Idle
                    </>
                  ) : (
                    <>
                      <Play size={13} /> Start Calibration Run
                    </>
                  )}
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
