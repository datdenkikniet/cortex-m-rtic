(function() {var implementors = {
"futures_core":[],
"futures_util":[["impl&lt;Fut, F, G&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.MapOkOrElse.html\" title=\"struct futures_util::future::MapOkOrElse\">MapOkOrElse</a>&lt;Fut, F, G&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;<a class=\"struct\" href=\"futures_util/future/struct.IntoFuture.html\" title=\"struct futures_util::future::IntoFuture\">IntoFuture</a>&lt;Fut&gt;, ChainFn&lt;MapOkFn&lt;F&gt;, ChainFn&lt;MapErrFn&lt;G&gt;, MergeResultFn&gt;&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;Fut1: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut2: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut3: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Join3.html\" title=\"struct futures_util::future::Join3\">Join3</a>&lt;Fut1, Fut2, Fut3&gt;"],["impl&lt;St: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryNext.html\" title=\"struct futures_util::stream::TryNext\">TryNext</a>&lt;'_, St&gt;"],["impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.All.html\" title=\"struct futures_util::stream::All\">All</a>&lt;St, Fut, F&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a>&gt;,</span>"],["impl&lt;Fut, E&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.ErrInto.html\" title=\"struct futures_util::future::ErrInto\">ErrInto</a>&lt;Fut, E&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.MapErr.html\" title=\"struct futures_util::future::MapErr\">MapErr</a>&lt;Fut, IntoFn&lt;E&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;St, A, B, FromA, FromB&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Unzip.html\" title=\"struct futures_util::stream::Unzip\">Unzip</a>&lt;St, FromA, FromB&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">(A, B)</a>&gt;,\n    FromA: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt;,\n    FromB: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;B&gt;,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Ready.html\" title=\"struct futures_util::future::Ready\">Ready</a>&lt;T&gt;"],["impl&lt;Fut, T&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.MapInto.html\" title=\"struct futures_util::future::MapInto\">MapInto</a>&lt;Fut, T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;Fut, IntoFn&lt;T&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;St, C&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryCollect.html\" title=\"struct futures_util::stream::TryCollect\">TryCollect</a>&lt;St, C&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>&gt;,</span>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,\n    B: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>&lt;Output = A::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#associatedtype.Output\" title=\"type core::future::future::Future::Output\">Output</a>&gt;,</span>"],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.MapOk.html\" title=\"struct futures_util::future::MapOk\">MapOk</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;<a class=\"struct\" href=\"futures_util/future/struct.IntoFuture.html\" title=\"struct futures_util::future::IntoFuture\">IntoFuture</a>&lt;Fut&gt;, MapOkFn&lt;F&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;F: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.OptionFuture.html\" title=\"struct futures_util::future::OptionFuture\">OptionFuture</a>&lt;F&gt;"],["impl&lt;St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Peek.html\" title=\"struct futures_util::stream::Peek\">Peek</a>&lt;'_, St&gt;"],["impl&lt;St, T&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.NextIfEq.html\" title=\"struct futures_util::stream::NextIfEq\">NextIfEq</a>&lt;'_, St, T&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;T&gt;,</span>"],["impl&lt;St, Fut, T, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryFold.html\" title=\"struct futures_util::stream::TryFold\">TryFold</a>&lt;St, Fut, T, F&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(T, St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>) -&gt; Fut,\n    Fut: <a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a>&lt;Ok = T, Error = St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>&gt;,</span>"],["impl&lt;St, C&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Collect.html\" title=\"struct futures_util::stream::Collect\">Collect</a>&lt;St, C&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>&gt;,</span>"],["impl&lt;F, R&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Lazy.html\" title=\"struct futures_util::future::Lazy\">Lazy</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;) -&gt; R,</span>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Select.html\" title=\"struct futures_util::future::Select\">Select</a>&lt;A, B&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"],["impl&lt;Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"enum\" href=\"futures_util/future/enum.MaybeDone.html\" title=\"enum futures_util::future::MaybeDone\">MaybeDone</a>&lt;Fut&gt;"],["impl&lt;St, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.NextIf.html\" title=\"struct futures_util::stream::NextIf\">NextIf</a>&lt;'_, St, F&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,\n    F: for&lt;'a&gt; FnOnce1&lt;&amp;'a St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>, Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a>&gt;,</span>"],["impl&lt;Fut1: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut2: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Join.html\" title=\"struct futures_util::future::Join\">Join</a>&lt;Fut1, Fut2&gt;"],["impl&lt;Fut: <a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"enum\" href=\"futures_util/future/enum.TryMaybeDone.html\" title=\"enum futures_util::future::TryMaybeDone\">TryMaybeDone</a>&lt;Fut&gt;"],["impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.ForEach.html\" title=\"struct futures_util::stream::ForEach\">ForEach</a>&lt;St, Fut, F&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>&gt;,</span>"],["impl&lt;F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Flatten.html\" title=\"struct futures_util::future::Flatten\">Flatten</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    Flatten&lt;F, &lt;F as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#associatedtype.Output\" title=\"type core::future::future::Future::Output\">Output</a>&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,</span>"],["impl&lt;Fut1, Fut2&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.TryFlatten.html\" title=\"struct futures_util::future::TryFlatten\">TryFlatten</a>&lt;Fut1, Fut2&gt;<span class=\"where fmt-newline\">where\n    TryFlatten&lt;Fut1, Fut2&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;Fut&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.UnitError.html\" title=\"struct futures_util::future::UnitError\">UnitError</a>&lt;Fut&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;Fut, OkFn&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;Fut1, Fut2, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.OrElse.html\" title=\"struct futures_util::future::OrElse\">OrElse</a>&lt;Fut1, Fut2, F&gt;<span class=\"where fmt-newline\">where\n    TryFlattenErr&lt;<a class=\"struct\" href=\"futures_util/future/struct.MapErr.html\" title=\"struct futures_util::future::MapErr\">MapErr</a>&lt;Fut1, F&gt;, Fut2&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.PollImmediate.html\" title=\"struct futures_util::future::PollImmediate\">PollImmediate</a>&lt;T&gt;"],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Inspect.html\" title=\"struct futures_util::future::Inspect\">Inspect</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    Map&lt;Fut, InspectFn&lt;F&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;Fut, E&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.OkInto.html\" title=\"struct futures_util::future::OkInto\">OkInto</a>&lt;Fut, E&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.MapOk.html\" title=\"struct futures_util::future::MapOk\">MapOk</a>&lt;Fut, IntoFn&lt;E&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;St: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.SelectNextSome.html\" title=\"struct futures_util::stream::SelectNextSome\">SelectNextSome</a>&lt;'_, St&gt;"],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    Map&lt;Fut, F&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;Fut: <a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a> + <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.IntoFuture.html\" title=\"struct futures_util::future::IntoFuture\">IntoFuture</a>&lt;Fut&gt;"],["impl&lt;Fut&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.NeverError.html\" title=\"struct futures_util::future::NeverError\">NeverError</a>&lt;Fut&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;Fut, OkFn&lt;<a class=\"type\" href=\"futures_util/never/type.Never.html\" title=\"type futures_util::never::Never\">Never</a>&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;St, Fut, T, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Fold.html\" title=\"struct futures_util::stream::Fold\">Fold</a>&lt;St, Fut, T, F&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(T, St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt;,</span>"],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.InspectOk.html\" title=\"struct futures_util::future::InspectOk\">InspectOk</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.Inspect.html\" title=\"struct futures_util::future::Inspect\">Inspect</a>&lt;<a class=\"struct\" href=\"futures_util/future/struct.IntoFuture.html\" title=\"struct futures_util::future::IntoFuture\">IntoFuture</a>&lt;Fut&gt;, InspectOkFn&lt;F&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.StreamFuture.html\" title=\"struct futures_util::stream::StreamFuture\">StreamFuture</a>&lt;St&gt;"],["impl&lt;St: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Next.html\" title=\"struct futures_util::stream::Next\">Next</a>&lt;'_, St&gt;"],["impl&lt;Fut1, Fut2, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.AndThen.html\" title=\"struct futures_util::future::AndThen\">AndThen</a>&lt;Fut1, Fut2, F&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.TryFlatten.html\" title=\"struct futures_util::future::TryFlatten\">TryFlatten</a>&lt;<a class=\"struct\" href=\"futures_util/future/struct.MapOk.html\" title=\"struct futures_util::future::MapOk\">MapOk</a>&lt;Fut1, F&gt;, Fut2&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Any.html\" title=\"struct futures_util::stream::Any\">Any</a>&lt;St, Fut, F&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a>&gt;,</span>"],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.UnwrapOrElse.html\" title=\"struct futures_util::future::UnwrapOrElse\">UnwrapOrElse</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;<a class=\"struct\" href=\"futures_util/future/struct.IntoFuture.html\" title=\"struct futures_util::future::IntoFuture\">IntoFuture</a>&lt;Fut&gt;, UnwrapOrElseFn&lt;F&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.MapErr.html\" title=\"struct futures_util::future::MapErr\">MapErr</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;<a class=\"struct\" href=\"futures_util/future/struct.IntoFuture.html\" title=\"struct futures_util::future::IntoFuture\">IntoFuture</a>&lt;Fut&gt;, MapErrFn&lt;F&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Count.html\" title=\"struct futures_util::stream::Count\">Count</a>&lt;St&gt;"],["impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Concat.html\" title=\"struct futures_util::stream::Concat\">Concat</a>&lt;St&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;&lt;St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" title=\"type core::iter::traits::collect::IntoIterator::Item\">Item</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl&lt;St, Si&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Forward.html\" title=\"struct futures_util::stream::Forward\">Forward</a>&lt;St, Si&gt;<span class=\"where fmt-newline\">where\n    Forward&lt;St, Si, St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>,</span>"],["impl&lt;Fut1: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut2: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut3: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut4: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Join4.html\" title=\"struct futures_util::future::Join4\">Join4</a>&lt;Fut1, Fut2, Fut3, Fut4&gt;"],["impl&lt;Fut1, Fut2, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Then.html\" title=\"struct futures_util::future::Then\">Then</a>&lt;Fut1, Fut2, F&gt;<span class=\"where fmt-newline\">where\n    Flatten&lt;<a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;Fut1, F&gt;, Fut2&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Pending.html\" title=\"struct futures_util::future::Pending\">Pending</a>&lt;T&gt;"],["impl&lt;Fut1: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut2: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut3: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut4: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>, Fut5: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Join5.html\" title=\"struct futures_util::future::Join5\">Join5</a>&lt;Fut1, Fut2, Fut3, Fut4, Fut5&gt;"],["impl&lt;St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.PeekMut.html\" title=\"struct futures_util::stream::PeekMut\">PeekMut</a>&lt;'_, St&gt;"],["impl&lt;Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Fuse.html\" title=\"struct futures_util::future::Fuse\">Fuse</a>&lt;Fut&gt;"],["impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.InspectErr.html\" title=\"struct futures_util::future::InspectErr\">InspectErr</a>&lt;Fut, F&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"futures_util/future/struct.Inspect.html\" title=\"struct futures_util::future::Inspect\">Inspect</a>&lt;<a class=\"struct\" href=\"futures_util/future/struct.IntoFuture.html\" title=\"struct futures_util::future::IntoFuture\">IntoFuture</a>&lt;Fut&gt;, InspectErrFn&lt;F&gt;&gt;: <a class=\"trait\" href=\"futures_util/future/trait.FusedFuture.html\" title=\"trait futures_util::future::FusedFuture\">FusedFuture</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()