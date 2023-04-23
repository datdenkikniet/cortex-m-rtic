#![allow(missing_docs)]

use crate::{Monotonic, TimeoutError};

use core::future::Future;

pub trait Scheduler: Monotonic {
    async fn delay(duration: Self::Duration);
    async fn delay_until(instant: Self::Instant);
    async fn timeout_at<F: Future>(instant: Self::Instant, f: F)
        -> Result<F::Output, TimeoutError>;
    async fn timeout_after<F: Future>(
        duration: Self::Duration,
        f: F,
    ) -> Result<F::Output, TimeoutError>;

    async fn delay_ms(millis: u32)
    where
        Self::Duration: FromSubSeconds,
    {
        Self::delay(<Self as Monotonic>::Duration::from_millis(millis)).await;
    }

    async fn delay_us(micros: u32)
    where
        Self::Duration: FromSubSeconds,
    {
        Self::delay(<Self as Monotonic>::Duration::from_micros(micros)).await;
    }
}

pub trait FromSubSeconds {
    fn from_millis(ms: u32) -> Self;
    fn from_micros(us: u32) -> Self;
}

#[cfg(feature = "fugit")]
mod fugit_impl {
    use super::FromSubSeconds;
    use fugit::{ExtU32, ExtU64};

    impl<const NOM: u32, const DENOM: u32> FromSubSeconds for fugit::Duration<u32, NOM, DENOM> {
        fn from_millis(ms: u32) -> Self {
            ExtU32::millis(ms)
        }

        fn from_micros(us: u32) -> Self {
            ExtU32::micros(us)
        }
    }

    impl<const NOM: u32, const DENOM: u32> FromSubSeconds for fugit::Duration<u64, NOM, DENOM> {
        fn from_millis(ms: u32) -> Self {
            ExtU64::millis(ms as u64)
        }

        fn from_micros(us: u32) -> Self {
            ExtU64::micros(us as u64)
        }
    }
}
