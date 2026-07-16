# Eventos de domínio — reservado para sprint futuro

A arquitetura orientada a eventos permanece **aprovada** (ADR-009), porém a
implementação foi **adiada** por decisão do Sprint 0.

Esta pasta existe apenas para preparar o terreno: quando a arquitetura de
eventos for implementada (previsto para o Sprint 5, junto das notificações), os
**tipos** dos eventos de domínio (`ProductCreated`, `PriceCollected`,
`AlertTriggered`, etc.) viverão aqui, e o Event Bus na camada `services/`.

Nada de Event Bus nem eventos concretos deve ser criado antes disso.

Referência: Decision Log — ADR-009.
